package com.example.aiquality.model;

public class PredictionResponse {

    private String message;
    private String grade;
    private double confidence;

    public PredictionResponse(String message, String grade, double confidence) {
        this.message = message;
        this.grade = grade;
        this.confidence = confidence;
    }

    public String getMessage() {
        return message;
    }

    public String getGrade() {
        return grade;
    }

    public double getConfidence() {
        return confidence;
    }
}
