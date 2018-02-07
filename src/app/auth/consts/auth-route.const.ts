import { Routes } from '@angular/router';
import { AuthCallbackPage } from '../pages/auth-callback/auth-callback.page';
import { NotAuthorizedPage } from '../pages/not-authorized/not-authorized.page';
import { PopUpPage } from '../pages/pop-up/pop-up.page';
import { SilentPage } from '../pages/silent/silent.page';

export const authRoutes: Routes = [
    { path: 'auth-callback', component: AuthCallbackPage },
    { path: 'not-authorized', component: NotAuthorizedPage },
    { path: 'pop-up', component: PopUpPage },
    { path: 'silent', component: SilentPage },
];
