import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {RecorddataService} from '../recorddata.service';
import { FormGroup,Validators,FormControl, NgForm} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private router: Router,
    private activatedroute: ActivatedRoute,
    private rd: RecorddataService,
    private rs: RecorddataService) { }
    form: FormGroup;
    data=[];
    stud={};
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      id: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      Dob: new FormControl('')
      
    });
    
  }
  goRecordsPage():void{
    this.router.navigate(['records']);
  }
  onSubmit(data){
    console.log(this.form);
    this.stud={"name":data.name,"id":data.id,"number":data.number,"email":data.email,"gender":data.gender,"Dob":data.Dob};
    this.data.push(this.stud);
    this.rs.setData(this.data);
  }
}
