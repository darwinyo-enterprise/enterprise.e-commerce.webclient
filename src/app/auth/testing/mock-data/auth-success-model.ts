import { IAuthSuccessModel } from '../../models/auth-success.model';

export const logSuccessMocks: IAuthSuccessModel = <IAuthSuccessModel>{
    isLogged: true,
    sub: '0000-000-0000-000000',
    userEmail: 'test.email@company.com',
    userLogin: 'test-user',
    userRole: ['tester']
};
