package com.example.pop.myapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class GalleryActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_gallery);

        Button btn_go01 = (Button) findViewById(R.id.study);
        btn_go01.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(getApplicationContext(), StudyGallery.class);
                        startActivity(intent);
                    }
                }
        );

        Button btn_go02 = (Button) findViewById(R.id.qna);
        btn_go02.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(getApplicationContext(), QnaGalleryActivity.class);
                        startActivity(intent);
                    }
                }
        );

        Button btn_go03 = (Button) findViewById(R.id.together);
        btn_go03.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(getApplicationContext(), TogetherGallery.class);
                        startActivity(intent);
                    }
                }
        );

        Button btn_go04 = (Button) findViewById(R.id.hansungsay);
        btn_go04.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(getApplicationContext(), HansungsayGallery.class);
                        startActivity(intent);
                    }
                }
        );
    }
}
