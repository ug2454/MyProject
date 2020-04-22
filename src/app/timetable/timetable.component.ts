import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { CreatetablepopupComponent } from '../createtablepopup/createtablepopup.component';

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
    const dialogRef = this.dialog.open(CreatetablepopupComponent,{
      width:'1000px',
      height:'600px',
      autoFocus:false
    });
  }

}
