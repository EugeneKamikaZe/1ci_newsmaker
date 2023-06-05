import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getRouteMain } from '~/shared/const/router';
import { Button, ButtonSize } from '~/shared/ui/Button/Button';

import s from './NotFound.module.scss';

export const NotFound = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('not_found');

    return (
        <div className={s.wrapper}>
            <div className={s.text}>
                4 0 4
            </div>

            <h1 className={s.title}>{t('title')}</h1>
            <p className={s.description}>{t('description')}</p>

            <Button
                onClick={() => navigate(getRouteMain())}
                size={ButtonSize.SMALL}
            >
                {t('back')}
            </Button>
        </div>
    );
};
