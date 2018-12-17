package com.example.pop.myapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

import java.util.HashMap;
import java.util.Map;

public class QnaWriteActivity extends AppCompatActivity implements View.OnClickListener {

    private EditText mQnaWriteTitleText;
    private EditText mQnaWriteContentsText;
    private EditText mQnaWriteNameText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qna_write);

        mQnaWriteTitleText = findViewById(R.id.qnawritetitle);
        mQnaWriteContentsText = findViewById(R.id.qnawritecontents);
        mQnaWriteNameText = findViewById(R.id.qnawritename);

        findViewById(R.id.qnaupload).setOnClickListener(this);

        Map<String, Object> post = new HashMap<>();
        post.put("id","");
        post.put("title",mQnaWriteTitleText.getText().toString());
        post.put("contents",mQnaWriteContentsText.getText().toString());
        post.put("name",mQnaWriteNameText.getText().toString());
    }

    @Override
    public void onClick(View view) {

    }
}
