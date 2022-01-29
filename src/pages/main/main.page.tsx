import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components';

const MainPage = (): JSX.Element => {
    return (
        <div>
            <Header back title="꽃길 레터" />
            <Outlet />
        </div>
    );
};

export default MainPage;
