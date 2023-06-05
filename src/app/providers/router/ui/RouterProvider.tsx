import { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const RouterProvider = ({ children }: { children?: ReactNode }) => (
    <BrowserRouter>
        <Suspense fallback="">{children}</Suspense>
    </BrowserRouter>
);

export default RouterProvider;
