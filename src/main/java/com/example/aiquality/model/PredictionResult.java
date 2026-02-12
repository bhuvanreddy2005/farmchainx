package com.example.aiquality.model;

public class PredictionResult {

    private String grade;
    private double confidence;

    public PredictionResult(String grade, double confidence) {
        this.grade = grade;
        this.confidence = confidence;
    }

    public String getGrade() {
        return grade;
    }

    public double getConfidence() {
        return confidence;
    }
}
