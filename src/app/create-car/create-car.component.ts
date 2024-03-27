import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FourwheerlerService } from '../fourwheerler.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  constructor(private _fourwheerlerService:FourwheerlerService){}
  public carForm:FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl(),
    }
  )
  submit(){
    console.log(this.carForm.value)
    this._fourwheerlerService.createCar(this.carForm.value).subscribe(
      (data:any)=>{
        alert("created successfully")
        this.carForm.reset();
      },
      (err:any)=>{
        alert("creation failed")
      }
    )
  }
}
