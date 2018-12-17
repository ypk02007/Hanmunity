package com.example.pop.myapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import java.util.HashMap;
import java.util.Map;

public class TogetherWriteActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText mTogetherWriteTitleText;
    private EditText mTogetherWriteContentsText;
    private EditText mTogetherWriteNameText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_together_write);

        mTogetherWriteTitleText = findViewById(R.id.togetherwritetitle);
        mTogetherWriteContentsText = findViewById(R.id.togetherwritecontents);
        mTogetherWriteNameText = findViewById(R.id.togetherwritename);

        findViewById(R.id.togetherupload).setOnClickListener(this);

        Map<String, Object> post = new HashMap<>();
        post.put("id","");
        post.put("title",mTogetherWriteTitleText.getText().toString());
        post.put("contents",mTogetherWriteContentsText.getText().toString());
        post.put("name",mTogetherWriteNameText.getText().toString());
    }

    @Override
    public void onClick(View view) {

    }
}
