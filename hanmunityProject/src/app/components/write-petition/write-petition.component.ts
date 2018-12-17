import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-petition',
  templateUrl: './write-petition.component.html',
  styleUrls: ['./write-petition.component.css']
})
export class WritePetitionComponent implements OnInit {
  title: String;
  content: String;
  max: Number;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  onPetitionSubmit() {
    const petition = {
      title: this.title,
      content: this.content,
      max: this.max
    }
    
    this.authService.writePetition(petition).subscribe(data => {
      if(data.success) {
        this.router.navigate(['/petition']);
      }
    })
  }
}
