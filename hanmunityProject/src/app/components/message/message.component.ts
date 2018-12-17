import { AfterViewChecked, ElementRef, ViewChild, OnDestroy, Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  user: Object;
  message: Object;
  roomId: String;
  content: String;

  intv = true;

  constructor(
    private validateService: ValidateService, 
    private authService: AuthService,
    private tempService: TempService,
    private flashMessage: NgFlashMessageService,
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
    this.roomId = this.tempService.getObj()
    this.refreshMessage();
    this.scrollToBottom();
    Observable.interval(500).takeWhile(() => this.intv).subscribe(() => this.refreshMessage());
  }

  ngAfterViewChecked() {        
    this.scrollToBottom();        
  }

  ngOnDestroy() {
    this.intv = false;
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }                 
  }

  sendMessage(u) {
    const send = {
      index: this.roomId,
      writer: u,
      content: this.content
    }
    
    this.authService.sendMessage(send).subscribe(data => {
      if(data.success) {
        this.refreshMessage();
      }
    })
  }

  refreshMessage() {
    const search = {
      id: this.roomId
    }
    this.authService.getMessage(search).subscribe(list => {
      this.message = list.message;
    },  
    err => {
      console.log(err);
      return false;
    });
  }

  isMine(m, u) {
    if(m==u)
      return true;
    else
      return false;
  }
}
