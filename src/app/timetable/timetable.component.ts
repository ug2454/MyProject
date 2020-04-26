import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { UserDetailsPopupComponent } from '../user-details-popup/user-details-popup.component';

@Component({
  selector: 'timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(UserDetailsPopupComponent,{
      width:'1000px',
      height:'600px',
      autoFocus:false
    });
  }
  openTimeTableGrid():void{
    const dialogRef = this.dialog.open(UserDetailsPopupComponent,{
      width:'1000px',
      height:'600px',
      autoFocus:false
    });
  }

}
