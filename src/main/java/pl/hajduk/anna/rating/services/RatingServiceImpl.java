package pl.hajduk.anna.rating.services;

import org.springframework.stereotype.Service;
import pl.hajduk.anna.rating.domain.Rate;
import pl.hajduk.anna.rating.repositories.RateRepository;

@Service
public class RatingServiceImpl implements RatingService {
    private final RateRepository rateRepository;

    public RatingServiceImpl(RateRepository rateRepository) {
        this.rateRepository = rateRepository;
    }

    @Override
    public double getAverageRate(String movieId) {
        return rateRepository.findByMovieId(movieId).stream()
                .map(Rate::getValue)
                .mapToInt(Integer::intValue)
                .average()
                .orElse(0.0);
    }
}
