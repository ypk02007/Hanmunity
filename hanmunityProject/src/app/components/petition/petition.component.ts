import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent implements OnInit {
  user: Object;
  petition: Object;
  petitionOne: Object;
  one: boolean;
  petitionId: String;
  search: String;
  page: number;
  pageNum: number;
  pageIndex: number[];
  petitionClick: Object;
  checkClick: Object;
  clicked = false;
  num: number;
  //numMax = 20;

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
    this.refreshPetition();
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }
  
  showOne(i, id, max) {
    this.one = true;
    this.petitionOne = this.petition[i];
    this.petitionId = id;
    //this.numMax = max;
    this.refreshClicked();
  }

  searchPetition() {
    const search = {
      keyword: this.search,
      board: 4
    }
    this.authService.search(search).subscribe(petitionList => {
      this.petition = petitionList.petition;
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
    var len = (<any>Object).keys(this.petition).length;
    var a = len/this.page;
    var n = Math.floor(a);
    if((a-n)>0 || a==0)
      n+=1;
    this.pageIndex = [];
    for(var i=0; i<n; i++) {
      this.pageIndex.push(i+1);
    }
  }

  refreshPetition() {
    this.authService.getPetition().subscribe(petitionList => {
      this.petition = petitionList.petition;
      this.pageLengthCalculate();
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  refreshClicked() {
    const search = {
      id: this.petitionId
    }
    this.authService.getPetitionClick(search).subscribe(list => {
      this.petitionClick = list.petitionClick;
      this.num = (<any>Object).keys(this.petitionClick).length;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  upCheck(u) {
    var check;
    const search = {
      index: this.petitionId,
      anonymous: u
    }
    this.authService.checkPetitionClick(search).subscribe(list => {
      this.checkClick = list.checkClick;
      check = (<any>Object).keys(this.checkClick).length;
        if(check<1)
      this.up(u);
        else
      this.clicked = true;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }

  up(u) { //u = user.id
    const clicked = {
      index: this.petitionId,
      anonymous: u
    } 

    this.authService.upPetition(clicked).subscribe(data => {
      if(data.success) {
        this.refreshClicked();
      }
    })
  }
}
