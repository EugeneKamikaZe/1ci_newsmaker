import {NotFound} from "~/pages/NotFound";
import {
    AppRoutes,
    getRouteLogin,
    getRouteMain,
    getRouteRegister,
} from '~/shared/const/router';
import type { AppRoutesProps } from '~/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        authOnly: true,
        element: "",
    },
    [AppRoutes.LOGIN]: {
        path: getRouteLogin(),
        element: "",
    },
    [AppRoutes.REGISTER]: {
        path: getRouteRegister(),
        element: "",
    },
    //  404
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFound />,
    },
};
