import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { cvv, tcsMail } from '../Validators';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',
  styleUrls: ['./create-user-form.component.css']
})
export class CreateUserFormComponent {

  public userform:FormGroup= new FormGroup({
    name: new FormControl(null, [Validators.required,Validators.minLength(3)]),
    age: new FormControl(null,[Validators.required, Validators.min(18), Validators.max(60)]),
    phone: new FormControl(null,[Validators.required,Validators.min(100000000),Validators.max(9999999999)]),
    email: new FormControl(null,[Validators.required, Validators.email,tcsMail]),
    address: new FormGroup({
      city: new FormControl(null,[Validators.required]),
      pin: new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
      cards: new FormArray([]),
      type: new FormControl(),
      busfee: new FormControl(),
      hostelfee: new FormControl()
  })
  get cardsFormArray(){
    return this.userform.get('cards') as FormArray;
  }
  add(){
    
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null,[Validators.required,Validators.min(16),Validators.max(16)]),
        expiry: new FormControl(),
        cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3),cvv])
      })
    )
  }
  delete(i:number){
    this.cardsFormArray.removeAt(i);
  }
  submit(){
    this.userform.markAllAsTouched();
    console.log(this.userform)
  }
   
// public dayInput: boolean=false;
// public hostelInput: boolean=false;

public radioForm = new FormGroup({
  dayscholor: new FormControl(),
  residential: new FormControl(),

}
)
// ondayscholor(){
//   this.dayInput= true;
//   this.hostelInput=false;

// }
// onhostel(){
//   this.hostelInput=true;
//   this.dayInput=false;
// }

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
constructor(){
  this.userform.get('type')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='dayScholor'){
        //add buss fee
        this.userform.addControl('busfee', new FormControl());
        //remove hostelfee
        this.userform.removeControl("hostelFee");
      }
      else{
        //add hostelfee
        this.userform.addControl("hostelfee", new FormControl());
        //remove busfee
        this.userform.removeControl("busfee");
      }
    }
  )
}


}
  
