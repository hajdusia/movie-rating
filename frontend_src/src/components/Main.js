import React from 'react';
import {connect} from 'react-redux';
import Movies from './Movies';
import {rateMovie, fetchMovies} from '../redux/ActionCreators';

class Main extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            < Movies
                items={this.props.movies.items}
                errMess={this.props.movies.errMess}
                rateMovie={this.props.rateMovie}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
};
const mapDispatchToProps = dispatch => ({
    fetchMovies: () => {
        dispatch(fetchMovies())
    },
    rateMovie: (movieId, rating) => dispatch(rateMovie(movieId, rating))
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);