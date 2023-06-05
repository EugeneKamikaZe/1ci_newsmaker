import classnames from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from '~/shared/ui/Button/Button';

import s from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        //  eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classnames(s.wrapper, className)}>
            <p className={s.text}>{t('page_error_text')}</p>
            <Button onClick={reloadPage}>{t('page_error_button')}</Button>
        </div>
    );
};
