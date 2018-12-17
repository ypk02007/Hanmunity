import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-write-together',
  templateUrl: './write-together.component.html',
  styleUrls: ['./write-together.component.css']
})
export class WriteTogetherComponent implements OnInit {
  title: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService,
    private authService: AuthService,
    private tempService: TempService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onTogetherSubmit() {
    const together = {
      title: this.title
    }
    
    this.authService.writeTogether(together).subscribe(data => {
      if(data.success) {
        this.router.navigate(['/together']);
      }
    })
  }
}
