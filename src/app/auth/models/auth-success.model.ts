export interface IAuthSuccessModel {
    sub: string;
    userLogin: string;
    userEmail: string;
    userRole: string[];
    isLogged: boolean;
}
