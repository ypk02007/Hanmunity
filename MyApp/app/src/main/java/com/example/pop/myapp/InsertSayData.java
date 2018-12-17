package com.example.pop.myapp;

import android.app.Activity;
import android.widget.EditText;

import java.net.MalformedURLException;
import java.net.URL;



public class InsertSayData extends PostRequest {
    public InsertSayData(Activity activity) {
        super(activity);
    }

    @Override
    protected void onPreExecute() {
        //EditText server = activity.findViewById(R.id.server);
        //String serverURLStr = server.getText().toString();
        String serverURLStr = "http://54.180.92.38:3000";
        try {
            url = new URL(serverURLStr + "/board/writePetition");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }
}