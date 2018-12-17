import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-question',
  templateUrl: './write-question.component.html',
  styleUrls: ['./write-question.component.css']
})
export class WriteQuestionComponent implements OnInit {
  user: Object;
  title: String;
  content: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private tempService: TempService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }
  onQuestionSubmit(w) {
    const question = {
      title: this.title,
      writer: w,
      content: this.content,
      update: this.tempService.getObj()
    }
    
    this.authService.writeQuestion(question).subscribe(data => {
      if(data.success) {
        this.router.navigate(['/question']);
      }
    })
  }
}
