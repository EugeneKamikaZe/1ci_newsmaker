import classnames from 'classnames';

import { Button } from '~/shared/ui/Button/Button';

import s from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const reloadPage = () => {
        //  eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classnames(s.wrapper, className)}>
            <p className={s.text}>Something went wrong</p>
            <Button onClick={reloadPage}>Reload page</Button>
        </div>
    );
};
