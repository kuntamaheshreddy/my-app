import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
@Input() public a:number=0;
@Input() public b: number=0;

@Output() public bEvent: EventEmitter<any>= new EventEmitter();

sum(){
  this.bEvent.emit(this.a+this.b);
}
sub(){
  this.bEvent.emit(this.a-this.b);
}
mul(){
  this.bEvent.emit(this.a*this.b);
}
}
