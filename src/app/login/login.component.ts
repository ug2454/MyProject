import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// import { TimeTableComponent } from '../timetable/timetable.component';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(private router:Router, public dataService:DataserviceService) { }

  isLoggedIn:boolean=true;


  public login(form){
      console.log(form.value);
      this.dataService.login(form.value).subscribe(data=>{
        console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data," DATA COMING FROM SERVER");
      
      if(data){
        window.alert("Login Successfull");
          this.router.navigate(["/home"]);
      }
      else{
        this.isLoggedIn=false;
      }
      });
  }

  register(form) {
    console.log(form.value);
    var formData = this.dataService.register(form.value).subscribe(data => {

      console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data);
      window.alert("Registration Successfull");
    });

  }
 
}
