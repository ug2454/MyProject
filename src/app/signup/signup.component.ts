import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private dialogRef:MatDialogRef<SignupComponent>,@Inject(MAT_DIALOG_DATA)public data:any) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
  register(form){
    console.log(form.value);
    this.dialogRef.close();
  }
 

}
