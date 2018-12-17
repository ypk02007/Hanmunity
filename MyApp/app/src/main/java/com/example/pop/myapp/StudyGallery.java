package com.example.pop.myapp;

import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListAdapter;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class StudyGallery extends AppCompatActivity implements View.OnClickListener {

    private RecyclerView mMainRecyclerView;

    private StudyAdapter mAdater;
    private List<StudyBoard> mBoardList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_study_gallery);

        Intent intent = getIntent();

            mMainRecyclerView = findViewById(R.id.studygallery);

        findViewById(R.id.writebutton).setOnClickListener(this);

        mBoardList = new ArrayList<>();
        mBoardList.add(new StudyBoard(null, "안녕하세요", null, "android"));
        mBoardList.add(new StudyBoard(null, "네 안녕하세요", null, "android2"));

        mAdater = new StudyAdapter(mBoardList);
        mMainRecyclerView.setAdapter(mAdater);

        new GetStudy(StudyGallery.this).execute();
    }

    @Override
    public void onClick(View v) {
        startActivity(new Intent(this, StudywriteActivity.class));
    }

    private class StudyAdapter extends RecyclerView.Adapter<StudyAdapter.StudyViewHolder> {

        private List<StudyBoard> mBoardList;

        public StudyAdapter(List<StudyBoard> mBoardList) {
            this.mBoardList = mBoardList;
        }

        @NonNull
        @Override
        public StudyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return new StudyViewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_study, parent, false));
        }

        @Override
        public void onBindViewHolder(@NonNull StudyViewHolder holder, int position) {
            StudyBoard data = mBoardList.get(position);
            holder.mStudytitle.setText(data.getTile());
            holder.mStudyName.setText(data.getName());
        }

        @Override
        public int getItemCount() {
            return mBoardList.size();
        }

        class StudyViewHolder extends RecyclerView.ViewHolder {

            private TextView mStudytitle;
            private TextView mStudyName;

            public StudyViewHolder(View itemView) {
                super(itemView);

                mStudytitle = itemView.findViewById(R.id.Studytitle);
                mStudyName = itemView.findViewById(R.id.Studyname);
            }
        }
    }
}
