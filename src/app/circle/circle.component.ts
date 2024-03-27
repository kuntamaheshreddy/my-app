import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  public num1: number=0;
  public pi: number=3.14;
  public result: number=0;
  area(){
    this.result= this.pi*this.num1*this.num1
  }
  perimeter(){
    this.result= 2*this.pi*this.num1;
  }

}
