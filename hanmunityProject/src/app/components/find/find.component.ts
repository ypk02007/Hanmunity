import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  email: String;
  name: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  findUser() {
    const user = {
      email: this.email,
      name: this.name
    }

    this.authService.findUser(user).subscribe(data => {
        window.alert(data.msg);
    })
  }
}
