import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {

  public userform:FormGroup= new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl()
    }),
      cards: new FormArray([])
  })
  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }
  add(){
    
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl()
      })
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }
  submit(){
    console.log(this.userform)
  }
   
public dayInput: boolean=false;
public hostelInput: boolean=false;

public radioForm = new FormGroup({
  dayscholor: new FormControl(),
  residential: new FormControl(),
  busfee: new FormControl(),
  hostelfee: new FormControl()
}
)
ondayscholor(){
  this.dayInput= true;
  this.hostelInput=false;

}
onhostel(){
  this.hostelInput=true;
  this.dayInput=false;
}
public candidateform= new FormGroup(
  {
    name: new FormControl(),
    experience1: new FormControl(),
    experience: new FormGroup({
      company: new FormControl(),
      experience2: new FormControl(),
      package: new FormControl()
    }),
    skills: new FormArray([])

  }
)
get skillsFormArray(){
  return this.candidateform.get("skills") as FormArray
}

add1(){
  new FormGroup({
    name: new FormControl(),
    experience: new FormControl(),
    rating: new FormControl()
  })
}


}
  
