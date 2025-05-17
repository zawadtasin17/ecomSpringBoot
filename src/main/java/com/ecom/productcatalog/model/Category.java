package com.ecom.productcatalog.model;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.Set;

@Entity
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "category",
                cascade = CascadeType.ALL,
                fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Product> products;
}
