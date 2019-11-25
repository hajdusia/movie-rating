package pl.hajduk.anna.rating.domain;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Builder
@Data
@Document(collection = "movies")
public class Movie {
    @Id
    private String id;
    private String title;
    private Genre genre;
    private Date productionDate;
    private double averageRate;
}
