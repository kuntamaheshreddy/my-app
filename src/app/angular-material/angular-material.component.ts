import { Component } from '@angular/core';
import { DummydisplayComponent } from '../dummydisplay/dummydisplay.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {

  constructor(private _bottomsheet:MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomsheet.open(DummydisplayComponent);
  }
}
