import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-together',
  templateUrl: './together.component.html',
  styleUrls: ['./together.component.css']
})
export class TogetherComponent implements OnInit {
  together: Object;

  constructor(
    private authService: AuthService,
    private tempService: TempService,
    private flashMessage: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTogether();
  }

  refreshTogether() {
    this.authService.getTogether().subscribe(List => {
      this.together = List.together;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }
  joinRoom(id) {
    this.tempService.insertObj(id);
    this.router.navigate(['/message']);
  }
}
