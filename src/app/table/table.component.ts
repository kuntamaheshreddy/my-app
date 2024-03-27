import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public value:string="";
  public products:any=[
     {sno:1, name:'pen',price:20, rating:3, freeDelivery:true},
     {sno:2,name:'phone',price:100, rating:2, freeDelivery:false},
      {sno:3,name:"shirt",price:400, rating:4, freeDelivery:true},
      {sno:4,name:"cap",price:200, rating:5, freeDelivery:false},
      {sno:5,name:"mobilecase",price:300, rating:2, freeDelivery:true},
      {sno:6,name:"remote",price:400, rating:2.5, freeDelivery:false}
    ]
    filter1(){
      this.products=this.products.filter((product:any)=>product.name.includes(this.value))
    }
    free(){
      this.products=this.products.filter((product:any)=>product.freeDelivery==true)
    }
    pricelow(){
      this.products=this.products.sort((a:any,b:any)=>a.price-b.price)
    }
    pricehigh(){
      this.products=this.products.sort((a:any,b:any)=>b.price-a.price)
    }
    ratinglow(){
      this.products=this.products.sort((a:any,b:any)=>a.rating-b.rating)
    }
    ratinghigh(){
      this.products=this.products.sort((a:any,b:any)=>b.rating-a.rating)
    }
    applydiscount(){
      this.products = this.products.map((product:any)=>{
        product.price = product.price/2;
        return product
      });
    }
    deliverycharge(){
      this.products = this.products.map((product:any)=>{
        product.price+=30;
        return product;
      })

    }
    totalprice(){
      var sum = this.products.reduce((sum:any, product:any)=>sum+product.price,0)
      alert(sum)
    }
    totalcart(){
      var len = this.products.length;
      alert(len)
    }
  }

