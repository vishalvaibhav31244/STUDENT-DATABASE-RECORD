import { Component, OnInit } from '@angular/core';
import { RecorddataService } from '../recorddata.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  localData=[];
  constructor(private rs:RecorddataService) { }

  ngOnInit(): void {
    this.localData=this.rs.servicedData;
  }
}
