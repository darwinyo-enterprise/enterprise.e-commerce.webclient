import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { User } from 'oidc-client';
import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth--auth-callback',
  templateUrl: './auth-callback.page.html',
  styleUrls: ['./auth-callback.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AuthCallbackPage implements OnInit {
  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.completeRedirectAuthentication();
  }
}
