import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth--silent',
  templateUrl: './silent.page.html',
  styleUrls: ['./silent.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class SilentPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.completeSilentAuthentication();
  }

}
