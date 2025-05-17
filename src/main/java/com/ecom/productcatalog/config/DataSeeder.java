package com.ecom.productcatalog.config;

import com.ecom.productcatalog.model.Category;
import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.repository.CategoryRepository;
import com.ecom.productcatalog.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Clear all existing data
        productRepository.deleteAll();
        categoryRepository.deleteAll();

        // Create Categories
        Category electronics = new Category();
        electronics.setName("Electronics");

        Category clothing = new Category();
        clothing.setName("Clothing");

        Category house = new Category();
        house.setName("House");

        categoryRepository.saveAll(Arrays.asList(electronics, clothing, house));

        // Create Products
        Product phone = new Product();
        phone.setName("iPhone");
        phone.setDescription("I love the ecosystem");
        phone.setImageUrl("https://www.pexels.com/photo/black-iphone-on-black-surface-13570143/");
        phone.setPrice(699.90);
        phone.setCategory(electronics);

        Product apple = new Product();
        apple.setName("Apple");
        apple.setDescription("Apple Apple");
        apple.setImageUrl("https://www.pexels.com/photo/red-and-orange-apple-fruit-102104/");
        apple.setPrice(340.99);
        apple.setCategory(house);

        Product watermelon = new Product();
        watermelon.setName("Watermelon");
        watermelon.setDescription("Watermelon Watermelon");
        watermelon.setImageUrl("https://www.pexels.com/photo/watermelon-fruit-1313267/");
        watermelon.setPrice(50.66);
        watermelon.setCategory(house);

        productRepository.saveAll(Arrays.asList(phone, apple, watermelon));



    }
}
