package pl.hajduk.anna.rating.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import pl.hajduk.anna.rating.domain.Rate;

import java.util.List;

public interface RateRepository extends MongoRepository<Rate, String> {
    List<Rate> findByMovieId(String movieId);
}
