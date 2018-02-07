import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth--pop-up',
  templateUrl: './pop-up.page.html',
  styleUrls: ['./pop-up.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class PopUpPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.completePopUpAuthentication();
  }

}
