import { Component, OnInit } from '@angular/core';
import { IManufacturerModel } from '../../models/manufacturer.model';
import { manufacturerMocks } from '../../mock-data/manufacturer.mock';

@Component({
  selector: 'app-list-manufacturer',
  templateUrl: './list-manufacturer.component.html',
  styleUrls: ['./list-manufacturer.component.scss']
})
export class ListManufacturerComponent implements OnInit {
  listManufacturer: IManufacturerModel[];
  constructor() {
    this.listManufacturer = [];
  }

  ngOnInit() {
    this.listManufacturer = manufacturerMocks;
  }

}
