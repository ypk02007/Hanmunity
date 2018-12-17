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

public class HansungsayWriteActivity extends AppCompatActivity {

    private EditText mHansungsayWriteTitleText;
    private EditText mHansungsayWriteContentsText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hansungsay_write);

        Button writeupload = (Button) findViewById(R.id.hansungsayupload);
        writeupload.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(HansungsayWriteActivity.this, HansungsayGallery.class);

                mHansungsayWriteTitleText = (EditText)findViewById(R.id.hansungsaywritetitle);
                mHansungsayWriteContentsText = (EditText)findViewById(R.id.hansungsaywritecontents);

                startActivity(intent);

                JSONObject postDataParam = new JSONObject();
                try {
                    postDataParam.put("title", mHansungsayWriteTitleText.getText().toString());
                    postDataParam.put("content", mHansungsayWriteContentsText.getText().toString());
                    postDataParam.put("max", 20);
                } catch(JSONException e) {
                    Log.e("Hanmunity", "JSONException");
                }
                new InsertSayData(HansungsayWriteActivity.this).execute(postDataParam);
            }
        });
    }
}
