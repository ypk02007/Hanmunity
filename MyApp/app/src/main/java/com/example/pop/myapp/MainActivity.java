package com.example.pop.myapp;

import android.content.Intent;
import android.content.SharedPreferences;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btn_go = (Button) findViewById(R.id.login);
        btn_go.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Intent intent = new Intent(getApplicationContext(), GalleryActivity.class);
                        startActivity(intent);
                    }
                }
        );
        Button button = (Button) findViewById(R.id.registerButton);
        button.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        Intent rintent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://54.180.92.38:3000"));
                        startActivity(rintent);
                    }
                }
        );
    }
}
