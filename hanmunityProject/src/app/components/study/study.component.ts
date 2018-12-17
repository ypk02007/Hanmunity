import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent implements OnInit {
  user: Object;
  study: Object;
  studyOne: Object;
  one: boolean;
  studyId: String;
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
    this.refreshStudy();
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
    this.studyOne = this.study[i];
    this.studyId = id;
    this.refreshComment();
  }

  searchStudy() {
    const search = {
      keyword: this.search,
      board: 1
    }
    this.authService.search(search).subscribe(studyList => {
      this.study = studyList.study;
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
    var len = (<any>Object).keys(this.study).length;
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
      index: this.studyId,
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
      id: this.studyId
    }
    this.authService.getComment(search).subscribe(list => {
      this.comment = list.comment;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  refreshStudy() {
    this.authService.getStudy().subscribe(studyList => {
      this.study = studyList.study;
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
    this.authService.deleteStudy(search).subscribe(data => {
      if(data.success) {
        this.refreshStudy();
        this.one = false;
      }
    });
  }
  update() {
    this.tempService.insertObj(this.studyId);
    this.router.navigate(['/writeStudy']);
  }
}
