package com.example.pop.myapp;

public class Hansungsay {
    String id;
    String title;
    String date;
    String content;

    public Hansungsay(String id, String title, String date, String content) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.content = content;
    }

    public String toString() {
        return String.format("Title = %s \n Date = %s", title, date);
    }
}
