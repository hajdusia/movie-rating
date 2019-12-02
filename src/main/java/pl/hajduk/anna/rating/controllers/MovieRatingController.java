package pl.hajduk.anna.rating.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.hajduk.anna.rating.api.Rating;
import pl.hajduk.anna.rating.domain.Genre;
import pl.hajduk.anna.rating.domain.Movie;
import pl.hajduk.anna.rating.domain.Rate;
import pl.hajduk.anna.rating.repositories.MovieRepository;
import pl.hajduk.anna.rating.repositories.RateRepository;
import pl.hajduk.anna.rating.services.RatingService;

import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/movie-rating")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieRatingController {
    private MovieRepository movieRepository;
    private RateRepository rateRepository;
    private RatingService ratingService;

    @Autowired
    public MovieRatingController(MovieRepository movieRepository, RateRepository rateRepository, RatingService ratingService) {
        this.movieRepository = movieRepository;
        this.rateRepository = rateRepository;
        this.ratingService = ratingService;

        movieRepository.deleteAll();

        movieRepository.insert(Movie.builder()
                .title("Forest Gump")
                .genre(Genre.COMEDY)
                .productionDate(new Calendar.Builder()
                        .setDate(1994, 11, 4)
                        .build()
                        .getTime()
                )
                .build());

        movieRepository.insert(Movie.builder()
                .title("Green Book")
                .genre(Genre.COMEDY)
                .productionDate(new Calendar.Builder()
                        .setDate(2019, 2, 8)
                        .build()
                        .getTime()
                )
                .build());

        movieRepository.insert(Movie.builder()
                .title("Rosemary's Baby")
                .genre(Genre.HORROR)
                .productionDate(new Calendar.Builder()
                        .setDate(1968, 6, 12)
                        .build()
                        .getTime()
                )
                .build());
    }

    @GetMapping
    public List<Movie> getAllMoviesWithRatings() {
        return movieRepository.findAll();
    }

    @PostMapping("/{movieId}")
    public void addRate(@PathVariable String movieId, @RequestBody Rating rating) {
        movieRepository.findById(movieId).ifPresent(movie -> {
            rateRepository.insert(Rate.builder()
                    .movieId(movieId)
                    .value(rating.getRating())
                    .build());

            double newAverageRate = ratingService.getAverageRate(movieId);
            movie.setAverageRate(newAverageRate);
            movieRepository.save(movie);
        });
    }
}