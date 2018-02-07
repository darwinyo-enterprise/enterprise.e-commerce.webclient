import { IMenuModel } from './../../../shared/models/menu/menu.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared--message-menu',
  templateUrl: './message-menu.component.html',
  styleUrls: ['./message-menu.component.scss']
})
export class MessageMenuComponent implements OnInit {
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
