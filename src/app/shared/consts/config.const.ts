import { URL_AUTHORIZATION_SERVER } from './server-url.const';
import { URL_HOST } from './host-url.const';
import { UserManagerSettings } from 'oidc-client';

export const SlideShowDelay = 2000;
export const DebounceTime = 1000;
export const UserLoginRegex = '^[a-zA-Z0-9]*$';
export const PasswordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}';
export const PhoneRegex = '^[0-9]*$';

export const clientID = 'template.webclient';

export const config: UserManagerSettings = {
    authority: URL_AUTHORIZATION_SERVER,
    client_id: clientID,

    // redirect authentication
    redirect_uri: URL_HOST + '/auth-callback',
    post_logout_redirect_uri: URL_HOST,

    // if we choose to use popup window instead for logins
    popup_redirect_uri: window.location.origin + '/pop-up',
    popupWindowFeatures: 'menubar=yes,location=yes,toolbar=yes,width=1200,height=800,left=100,top=100;resizable=yes',

    // silent renew will get a new access_token via an iframe
    // just prior to the old access_token expiring (60 seconds prior)
    automaticSilentRenew: true,
    silent_redirect_uri: URL_HOST + '/silent',

    response_type: 'id_token token',
    scope: 'openid profile role',

    // this will allow all the OIDC protocol claims to be visible in the window. normally a client app
    // wouldn't care about them or want them taking up space
    filterProtocolClaims: false,
    loadUserInfo: true,

    // will revoke (reference) access tokens at logout time
    revokeAccessTokenOnSignout: true,
};
