import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private service:DataserviceService,private dialogRef:MatDialogRef<SignupComponent>,@Inject(MAT_DIALOG_DATA)public data:any,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
  register(form){
    console.log(form.value);
    var formData=this.service.sendData(form.value).subscribe(data=>{
      console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data);
    });
    console.log(formData);
    this.dialogRef.close();
    
  }
 

}
