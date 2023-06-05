/* eslint-disable */
export enum AppRoutes {
    LOGIN = 'login',
    REGISTER = 'register',
    MAIN = 'dashboard',
    // 404
    NOT_FOUND = 'not_found',
}
/* eslint-enable */

export const getRouteMain = () => '/dashboard';
export const getRouteLogin = () => '/login';
export const getRouteRegister = () => '/register';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteLogin()]: AppRoutes.LOGIN,
    [getRouteRegister()]: AppRoutes.REGISTER,
};
