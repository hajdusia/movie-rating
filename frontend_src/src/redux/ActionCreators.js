import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const loadMovies = (movies) => ({
    type: ActionTypes.LOAD_MOVIES,
    payload: movies
});

export const loadMoviesFailed = (errmess) => ({
    type: ActionTypes.LOAD_MOVIES_FAILED,
    payload: errmess
});

export const fetchMovies = () => (dispatch) => {
    return fetch(`${baseUrl  }movie-rating`, {
          method: 'GET',
          headers: {
                "Content-Type": "application/json"
             },
             mode: 'cors'
          })
          .then(response => {
              if (response.ok) {
                  return response;
              }
                  console.log(response);
                  const error = new Error(`Error ${  response.status  }: ${  response.statusText}`);
                  error.response = response;
                  throw error;

              },
              error => {
                  throw error;
              })
          .then(response => response.json())
          .then(movies => dispatch(loadMovies(movies)))
          .catch(error => dispatch(loadMoviesFailed(error.message)));
};

export const rateMovie = ( id, rating) => (dispatch) => {
    return fetch(`${baseUrl  }movie-rating/${  id}`, {
        method: "POST",
        body: JSON.stringify({ rating }),
        headers: {
            "Content-Type": "application/json"
        },
        mode: 'cors'
    })
        .then(response => {
            if (response.ok) {
                return response;
            }
                const error = new Error(`Error ${  response.status  }: ${  response.statusText}`);
                error.response = response;
                throw error;

            },
            error => {
                throw error;
            })
        .then(() => dispatch(fetchMovies()))
        .catch(error => {
            alert(`Your rating could not be added\nError: ${  error.message}`);
        });
};



