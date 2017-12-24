import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
online:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onlineClicked(){
  this.online = true;
  }
  onlinenotclicked(){
    this.online = false;
  }
  redirect(){
     window.open("https://www.instamojo.com/aditya1234/international-confrence-2018/", "_blank");
  }

}
