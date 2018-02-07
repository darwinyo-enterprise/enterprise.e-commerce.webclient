import { Component, OnInit } from '@angular/core';
import { IManufacturerModel } from '../../models/manufacturer.model';

@Component({
  selector: 'app-manufacturer-form',
  templateUrl: './manufacturer-form.component.html',
  styleUrls: ['./manufacturer-form.component.scss']
})
export class ManufacturerFormComponent implements OnInit {
  manufacturer: IManufacturerModel;
  constructor() {
    this.manufacturer = null;
  }

  ngOnInit() {
  }

}
