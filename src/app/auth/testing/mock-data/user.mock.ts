import { User } from 'oidc-client';

export const userMock: User = <User>{
    id_token: 'string',
    access_token: 'string',
    scope: 'string',
    /** Claims */
    profile: {
        sub: '0000-000-0000-000000',
        name: 'test-user',
        email: 'test.email@company.com',
        role: ['tester']
    }
};
