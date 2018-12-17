package com.example.pop.myapp;

public class QnaBoard {

    private String id;
    private String title;
    private String contents;
    private String name;

    public QnaBoard() {
    }

    public QnaBoard(String id, String title, String contents, String name)
    {
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTile() {
        return title;
    }

    public void setTile(String tile) {
        this.title = tile;
    }

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "QnaBoard{" +
                "id='" + id + '\'' +
                ", tile='" + title + '\'' +
                ", contents='" + contents + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
