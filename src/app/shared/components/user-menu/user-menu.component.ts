import { URLsClient } from './../../../shared/consts/url.const';
import { IMenuModel } from './../../../shared/models/menu/menu.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared--user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  @Input() menuModel: IMenuModel[];
  @Output() navigateEvent: EventEmitter<string>;

  constructor() {
    this.navigateEvent = new EventEmitter();
  }

  ngOnInit() {
  }
  onMenu_Clicked(url: string) {
    this.navigateEvent.emit(url);
  }
}
