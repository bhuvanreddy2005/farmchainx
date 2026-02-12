package com.example.aiquality.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class QualityController {

    @GetMapping("/")
    public String home() {
        return "Application is running successfully!";
    }
}
