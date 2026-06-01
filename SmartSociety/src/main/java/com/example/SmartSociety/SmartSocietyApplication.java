package com.example.SmartSociety;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
@EnableScheduling
@SpringBootApplication
public class SmartSocietyApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartSocietyApplication.class, args);
	}

}
