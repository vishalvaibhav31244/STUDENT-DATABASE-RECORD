import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecorddataService {
  servicedData=[];
  constructor() { }
  setData(data)
  {
    this.servicedData=data
  }
}
