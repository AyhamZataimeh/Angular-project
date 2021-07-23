import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AllowService } from '../allowService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private allowUser:AllowService) { }
  @ViewChild('email')email:ElementRef;
  @ViewChild('password')password:ElementRef;
  hostName;
  host;
  
  ngOnInit(): void {
  }
  logIn(){
   
    this.hostName=this.email.nativeElement.value.split("@");
      for (let i = 0; i < this.hostName.length; i++) {
            this.host=this.hostName[i].split(".");
    
    
      } 
      this.allowUser.hostName(this.host[0])

      
  }


}
