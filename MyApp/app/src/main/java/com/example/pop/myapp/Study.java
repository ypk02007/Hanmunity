package com.example.pop.myapp;

public class Study {
    String id;
    String title;
    String date;
    String writer;
    String content;

    public Study(String id, String title, String date, String writer, String content) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.writer = writer;
        this.content = content;
    }

    public String toString() {
        return String.format("Title = %s \n Writer = %s \n Date = %s", title, writer, date);
    }
}
