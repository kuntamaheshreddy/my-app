import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public accounts: any=[];
  public term: string="";
  
  

  constructor(private _accountsService:AccountsService){
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  filteraccounts(){
    this._accountsService.filteraccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  delete(id:any){
    this._accountsService.deleteform(id).subscribe(
      (data:any)=>{
        this.accounts=data;
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
