import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent {
public apiList: any=[];
constructor(private _aPIService: APIService){
  _aPIService.getAPI().subscribe(
    (data:any)=>{
      this.apiList=data;
    },
    (err:any)=>{
      alert("Internal Server error")
    }
  )
}
refresh(){
  this._aPIService.getAPI().subscribe(
    (data:any)=>{
      this.apiList=data;
    },
    (err:any)=>{
      alert("Internal Server error")
    }
  )
  

}
}
