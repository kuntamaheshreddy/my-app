import { Component } from '@angular/core';
import { FourwheerlerService } from '../fourwheerler.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-fourwheeler',
  templateUrl: './fourwheeler.component.html',
  styleUrls: ['./fourwheeler.component.css']
})
export class FourwheelerComponent {

public fourwheeler:any=[];


public term:string="";
public pageNo:number =0;
public column:string="";
public order:string="";
public queries: any={
  filter:"",
  limit:10,
  pageNo:0,
  sortBy:"",
  order:""
}

constructor(private _fourwheerlerService:FourwheerlerService){
  _fourwheerlerService.getCars().subscribe(
    (data:any)=>{
      this.fourwheeler= data;
    },
    (err:any)=>{
      alert("Interbal server error");
    }
  )

}
filterFourwheeler(){
  this._fourwheerlerService.getfilteredCars(this.term).subscribe(
    (data:any)=>{
      this.fourwheeler=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
    
  )
}
getPagedFourwheeler(){
  this._fourwheerlerService.getPagedfourwheeler(this.pageNo).subscribe(
    (data:any)=>{
      this.fourwheeler=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
    
  )
}
getSortedCars(){
  this._fourwheerlerService.getSortedCars(this.column, this.order).subscribe(
    (data:any)=>{
      this.fourwheeler=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
    
  )
}
deleteCar(id:string){
  this._fourwheerlerService.deleteCar(id).subscribe(
    (data:any)=>{
      alert("deleted successfully");
      location.reload();
    },
    (err:any)=>{
      alert(("Internal Server error"))
    }
  )
}

  }

