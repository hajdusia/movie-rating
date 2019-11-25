package pl.hajduk.anna.rating.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;
import pl.hajduk.anna.rating.domain.Movie;

public interface MovieRepository extends MongoRepository<Movie, String> {
}
