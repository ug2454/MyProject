import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'timetable-popup',
  templateUrl: './timetable-popup.component.html',
  styleUrls: ['./timetable-popup.component.css']
})
export class TimetablePopupComponent implements OnInit {

  timetable:any=[];

  dataSource = new MatTableDataSource(this.timetable)
  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
    this.service.getTimeTable().subscribe((data)=>{
      this.timetable=data;
      this.dataSource.data=this.timetable;
      
    })
  }

  displayColumns:string[]=['idtimetable','Monday','Tuesday','Wednesday','Thursday','Friday'];

}
