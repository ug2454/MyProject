import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(public dataService:DataserviceService, public dialog:MatDialog) { }

  public login(form){
      console.log(form.value);
      this.dataService.login(form.value).subscribe(data=>{
        console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data);
      window.alert("Login Successfull");
      });
  }
 public openDialog(){
  //  e.preventDefault();
   console.log("open dialog")
  let dialogRef = this.dialog.open(SignupComponent, {
    height: '400px',
    width: '600px',
  });
 }
 
}
