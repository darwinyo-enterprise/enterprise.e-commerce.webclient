import { Component, OnInit, Input } from '@angular/core';

import { SlideShowDelay } from '../../../shared/consts/config.const';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shared--carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  /** Input Data Source for SlideShow */
  @Input() dataSource: string[];

  /** Defined By Config Value */
  slideshowDelay = SlideShowDelay;

  constructor() {
  }

  ngOnInit() {
  }

}
