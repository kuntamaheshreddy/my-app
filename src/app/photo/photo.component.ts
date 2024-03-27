import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
public photos:any=[];
constructor(private _photoServiceto:PhotoService){
  _photoServiceto.getphoto().subscribe(
    (data:any)=>{
      this.photos=data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}
}
