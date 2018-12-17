package com.example.pop.myapp;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class TogetherGallery extends AppCompatActivity implements View.OnClickListener {

    private RecyclerView mMain4Recyclerview;

    private TogetherAdapter mTogetherAdapter;
    private List<TogetherBoard> mBoard4List;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_together_gallery);

        mMain4Recyclerview = findViewById(R.id.togethergallery);

        findViewById(R.id.write4button).setOnClickListener(this);

        mBoard4List = new ArrayList<>();
        mBoard4List.add(new TogetherBoard(null, "투게더입니다.", null, "android7"));
        mBoard4List.add(new TogetherBoard(null, "네", null, "android8"));

        mTogetherAdapter = new TogetherAdapter(mBoard4List);
        mMain4Recyclerview.setAdapter(mTogetherAdapter);
    }

    @Override
    public void onClick(View view) {
        startActivity(new Intent(this, TogetherWriteActivity.class));
    }

    private class TogetherAdapter extends RecyclerView.Adapter<TogetherAdapter.TogetherviewHolder> {

        private List<TogetherBoard> mBoard4List;

        public TogetherAdapter(List<TogetherBoard> mBoard4List) {
            this.mBoard4List = mBoard4List;
        }

        @NonNull
        @Override
        public TogetherviewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return new TogetherviewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_together, parent, false));
        }

        @Override
        public void onBindViewHolder(@NonNull TogetherviewHolder holder, int position) {
            TogetherBoard data = mBoard4List.get(position);
            holder.mTogetherTitle.setText(data.getTile());
            holder.mTogetherName.setText(data.getName());
        }

        @Override
        public int getItemCount() {
            return mBoard4List.size();
        }

        class TogetherviewHolder extends RecyclerView.ViewHolder {

            private TextView mTogetherTitle;
            private TextView mTogetherName;

            public TogetherviewHolder(View itemView) {
                super(itemView);

                mTogetherTitle = itemView.findViewById(R.id.Togethertitle);
                mTogetherName = itemView.findViewById(R.id.Togethername);
            }
        }
    }
}
