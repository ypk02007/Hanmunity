package com.example.pop.myapp;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.util.HashMap;
import java.util.Map;

import android.util.Log;
import android.widget.Adapter;
import android.widget.AdapterView;

import org.json.JSONException;
import org.json.JSONObject;

public class StudywriteActivity extends AppCompatActivity {

    private EditText mStudyWriteTitleText;
    private EditText mStudyWriteContentsText;
    private EditText mStudyWriteNameText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_studywrite);

        Button writeupload = (Button) findViewById(R.id.writeupload);
        writeupload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(StudywriteActivity.this, StudyGallery.class);

                mStudyWriteTitleText = (EditText)findViewById(R.id.studywritetitle);
                mStudyWriteContentsText = (EditText)findViewById(R.id.studywritecontents);
                mStudyWriteNameText = (EditText)findViewById(R.id.studywritename);

                startActivity(intent);

                JSONObject postDataParam = new JSONObject();
                try {
                    postDataParam.put("title", mStudyWriteTitleText.getText().toString());
                    postDataParam.put("writer", mStudyWriteNameText.getText().toString());
                    postDataParam.put("content", mStudyWriteContentsText.getText().toString());
                    postDataParam.put("update", "");
                } catch(JSONException e) {
                    Log.e("Hanmunity", "JSONException");
                }
                new InsertData(StudywriteActivity.this).execute(postDataParam);
            }
        });
    }
}
