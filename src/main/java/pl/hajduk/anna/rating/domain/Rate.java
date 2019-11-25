package pl.hajduk.anna.rating.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Builder
@Data
public class Rate {
    @Id
    private String rateId;
    private String movieId;
    private int value;
}
