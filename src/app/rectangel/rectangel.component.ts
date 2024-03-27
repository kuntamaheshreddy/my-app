import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangel',
  templateUrl: './rectangel.component.html',
  styleUrls: ['./rectangel.component.css']
})
export class RectangelComponent {
  public num1: number=0;
  public num2: number=0;
  public result: number=0;
  area(){
    this.result=this.num1*this.num2;
  };
  perimeter(){
    this.result=2*(this.num1+this.num2)
  }



}
