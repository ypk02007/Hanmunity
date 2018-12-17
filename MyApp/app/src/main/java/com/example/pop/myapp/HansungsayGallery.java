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

public class HansungsayGallery extends AppCompatActivity implements View.OnClickListener {

    private RecyclerView mMain3RecyclerView;

    private HansungsayAdapter mHansungsayAdapter;
    private List<HansungsayBoard> mBoard3List;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hansungsay_gallery);

        mMain3RecyclerView = findViewById(R.id.hansungsaygallery);

        findViewById(R.id.write3button).setOnClickListener(this);

        mBoard3List = new ArrayList<>();
        mBoard3List.add(new HansungsayBoard(null, "한성청원게시판입니다.", null, "android5"));
        mBoard3List.add(new HansungsayBoard(null, "네 맞습니다.", null, "android6"));

        mHansungsayAdapter = new HansungsayAdapter(mBoard3List);
        mMain3RecyclerView.setAdapter(mHansungsayAdapter);
    }

    @Override
    public void onClick(View v) {
        startActivity(new Intent(this, HansungsayWriteActivity.class));
    }

    private class HansungsayAdapter extends RecyclerView.Adapter<HansungsayAdapter.HansungsayViewHolder> {

        private List<HansungsayBoard> mBoard3List;

        public HansungsayAdapter(List<HansungsayBoard> mBoard3List) {
            this.mBoard3List = mBoard3List;
        }

        @NonNull
        @Override
        public HansungsayViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return new HansungsayViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_hansung, parent, false));
        }

        @Override
        public void onBindViewHolder(@NonNull HansungsayViewHolder holder, int position) {
            HansungsayBoard data = mBoard3List.get(position);
            holder.mHansungsayTitle.setText(data.getTile());
            holder.mHansungsayName.setText(data.getName());
        }

        @Override
        public int getItemCount() {
            return mBoard3List.size();
        }

        class HansungsayViewHolder extends RecyclerView.ViewHolder {

            private TextView mHansungsayTitle;
            private TextView mHansungsayName;

            public HansungsayViewHolder(View itemView) {
                super(itemView);

                mHansungsayTitle = itemView.findViewById(R.id.Hansungsaytitle);
                mHansungsayName = itemView.findViewById(R.id.Hansungsayname);
            }
        }
    }
}
