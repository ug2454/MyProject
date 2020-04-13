import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

  constructor(public dialog:MatDialog) { }

  public login(){
    
  }
 public openDialog(){
  let dialogRef = this.dialog.open(SignupComponent, {
    height: '400px',
    width: '600px',
  });
 }
 
}
