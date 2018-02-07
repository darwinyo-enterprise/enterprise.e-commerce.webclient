import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IBaseFormBuilderModel } from '../../models/form/base-form-builder.model';
import { DxFormComponent } from 'devextreme-angular';
import { Employee } from '../../models/employee';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-base-form-builder',
  templateUrl: './base-form-builder.component.html',
  styleUrls: ['./base-form-builder.component.scss']
})
export class BaseFormBuilderComponent implements AfterViewInit {
  // @Input() formFields: IBaseFormBuilderModel;
  @ViewChild(DxFormComponent) myform: DxFormComponent;
  employee: Employee;
  positions: string[];
  rules: Object;
  constructor() {
    this.employee = {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
      Position: 'CEO',
      BirthDate: '1964/03/16',
      HireDate: '1995/01/15',
      Notes: 'John has been in the Audio/Video industry its CEO since 2003 golf and bowl. He once bowled a perfect game of 300.',
      Address: '351 S Hill St., Los Angeles, CA',
      Phone: '360-684-1334'
    };
    this.positions = [
      'HR Manager',
      'IT Manager',
      'CEO',
      'Controller',
      'Sales Manager',
      'Support Manager',
      'Shipping Manager'
    ];
    this.rules = { 'X': /[02-9]/ };
  }

  ngAfterViewInit() {
    this.myform.instance.validate();
  }
}
