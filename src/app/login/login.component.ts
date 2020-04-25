import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { TimeTableComponent } from '../timetable/timetable.component';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent {


  constructor(private router: Router, public dataService: DataserviceService,private cookie:CookieService) { }

  isLoggedIn: boolean = true;
  isRegistration :boolean=true;
  username: any
  usernm = this.username;

  

  public login(form) {
    console.log("login value",form.value["email1"]);
    this.dataService.login(form.value).subscribe(data => {
      console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data, " DATA COMING FROM SERVER");
      this.username = data[1];
      console.log(this.username);
      this.cookie.set('cookie-name',this.username)

      if (data) {
        window.alert("Login Successfull");
        this.dataService.setLoggedIn(true);
        this.router.navigate(["/home"]);
      }
      else {
        this.isLoggedIn = false;
      }
    });
  }
  userName() {
    return this.username;
  }


  register(form) {
    console.log(form.value);
    var formData = this.dataService.register(form.value).subscribe(data => {

      console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data);
      if(data>=1){
        this.isRegistration=false;
      }
      else{
        
        window.alert("Registration Successfull");
        this.isRegistration=true;
      }
    });

  }

}
