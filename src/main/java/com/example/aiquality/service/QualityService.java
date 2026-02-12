package com.example.aiquality.service;

import java.util.Random;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.aiquality.model.PredictionResult;

@Service
public class QualityService {

    public PredictionResult predictQuality(MultipartFile file) {

        

        Random random = new Random();
        String[] grades = {"A", "B", "C"};

        String predictedGrade = grades[random.nextInt(3)];
        double confidence = 70 + (95 - 70) * random.nextDouble();

        return new PredictionResult(predictedGrade, confidence);
    }
}
