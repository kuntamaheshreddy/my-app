import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
public isHonda: boolean=false;
public isBMW: boolean=false;
public isVolvo: boolean=false;

bmw(){
  this.isBMW=true;
  this.isHonda=false;
  this.isVolvo=false;  
}
volvo(){
  this.isBMW=false;
  this.isHonda=false;
  this.isVolvo=true;
}
honda(){
  this.isBMW=false;
  this.isHonda=true;
  this.isVolvo=false;

}
}
