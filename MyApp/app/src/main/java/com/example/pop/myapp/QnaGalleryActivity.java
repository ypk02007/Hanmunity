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

public class QnaGalleryActivity extends AppCompatActivity implements View.OnClickListener {

    private RecyclerView mMain2Recyclerview;

    private QnaAdapter mQnaAdapter;
    private List<QnaBoard> mBoard2List;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qna_gallery);
        mMain2Recyclerview = findViewById(R.id.qnagallery);

        findViewById(R.id.write2button).setOnClickListener(this);

        mBoard2List = new ArrayList<>();
        mBoard2List.add(new QnaBoard(null, "QnA 게시판입니다.", null,  "andriod3"));
        mBoard2List.add(new QnaBoard(null, "네 맞습니다.", null,  "android4"));

        mQnaAdapter = new QnaAdapter(mBoard2List);
        mMain2Recyclerview.setAdapter(mQnaAdapter);
    }

    @Override
    public void onClick(View v) {
        startActivity(new Intent(this, QnaWriteActivity.class));
    }

    private class QnaAdapter extends RecyclerView.Adapter<QnaAdapter.QnaviewHolder> {

        private List<QnaBoard> mBoard2List;

        public QnaAdapter(List<QnaBoard> mBoard2List) {
            this.mBoard2List = mBoard2List;
        }

        @NonNull
        @Override
        public QnaviewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return new QnaviewHolder(LayoutInflater.from(parent.getContext()).inflate(R.layout.item_qna, parent, false));
        }

        @Override
        public void onBindViewHolder(@NonNull QnaviewHolder holder, int position) {
            QnaBoard data = mBoard2List.get(position);
            holder.mQnaTitle.setText(data.getTile());
            holder.mQnaname.setText(data.getName());
        }

        @Override
        public int getItemCount() {
            return mBoard2List.size();
        }

        class QnaviewHolder extends RecyclerView.ViewHolder {

            private TextView mQnaTitle;
            private TextView mQnaname;

            public QnaviewHolder(View itemView) {
                super(itemView);

                mQnaTitle = itemView.findViewById(R.id.Qnatitle);
                mQnaname = itemView.findViewById(R.id.Qnaname);
            }
        }
    }
}
