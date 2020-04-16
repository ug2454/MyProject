import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: DataserviceService, private dialogRef: MatDialogRef<SignupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }


  showMsg: boolean = false;

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }



  register(form) {
    console.log(form.value);
    var formData = this.service.register(form.value).subscribe(data => {

      console.log("SUCCESSFULLY CONNECTED TO SERVER");
      console.log(data);
      window.alert("Registration Successfull");
    });

    console.log(formData);
    this.dialogRef.close();

  }


}
