import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core--home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  dataSource: string[];

  constructor() {
    this.dataSource = [
      "https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2017/SHOW/GW/Comms/k-gw-2pack-noCTA-1500x300-4._CB489439155_.jpg",
    ];
  }

  ngOnInit() {
  }

}
