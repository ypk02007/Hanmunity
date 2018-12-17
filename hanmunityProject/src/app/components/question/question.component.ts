import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  user: Object;
  question: Object;
  questionOne: Object;
  one: boolean;
  questionId: String;
  search: String;
  page: number;
  pageNum: number;
  pageIndex: number[];
  content: String;
  comment: Object;
  del: String;

  constructor(
    private authService: AuthService,
    private tempService: TempService,
    private flashMessage: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.page = 3;
    this.pageNum = 1;
    this.one = false;
    this.refreshQuestion();
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  showOne(i, id) {
    this.one = true;
    this.questionOne = this.question[i];
    this.questionId = id;
    this.refreshComment();
  }

  searchQuestion() {
    const search = {
      keyword: this.search,
      board: 2
    }
    this.authService.search(search).subscribe(questionList => {
      this.question = questionList.question;
      this.pageLengthCalculate();
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  changePage(i) {
    if((i==-1)&&(this.pageNum>1))
      this.pageNum--;
    else if((i==0)&&(this.pageNum<this.pageIndex.length))
      this.pageNum++;
    else if(i>0)
      this.pageNum = i;
  }

  pageCheck(i) {
    i-=((this.page)*(this.pageNum-1));
    if(i>=0 && i<this.page)
      return true;
    else
      return false;
  }

  pageLengthCalculate() {
    var len = (<any>Object).keys(this.question).length;
    var a = len/this.page;
    var n = Math.floor(a);
    if((a-n)>0 || a==0)
      n+=1;
    this.pageIndex = [];
    for(var i=0; i<n; i++) {
      this.pageIndex.push(i+1);
    }
  }
  submitComment(u) { //u = user.name
    //var w = u;
    const comment = {
      index: this.questionId,
      writer: u,
      content: this.content
    } 

    this.authService.writeComment(comment).subscribe(data => {
      if(data.success) {
        this.refreshComment();
      }
    })
  }

  refreshComment() {
    const search = {
      id: this.questionId
    }
    this.authService.getComment(search).subscribe(list => {
      this.comment = list.comment;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  refreshQuestion() {
    this.authService.getQuestion().subscribe(questionList => {
      this.question = questionList.question;
      this.pageLengthCalculate();
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  deleteComment(del) {
    this.del = del;
    const search = {
      id: this.del
    }
    this.authService.deleteComment(search).subscribe(data => {
      if(data.success) {
        this.refreshComment();
      }
    });
  }
  delete(del) {
    this.del = del;
    const search = {
      id: this.del
    }
    this.authService.deleteQuestion(search).subscribe(data => {
      if(data.success) {
        this.refreshQuestion();
        this.one = false;
      }
    });
  }
  update() {
    this.tempService.insertObj(this.questionId);
    this.router.navigate(['/writeQuestion']);
  }
}
