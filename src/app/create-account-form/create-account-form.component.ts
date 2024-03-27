import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent {
constructor(private _accountsService:AccountsService){}

  public accountForm:FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),
      id: new FormControl(),
    }
  )
  submit(){
    console.log(this.accountForm.value)
    this._accountsService.submitform(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("Created successfully")
      },
      (err:any)=>{
        alert("creation failed")
      }
    )
  }
}
