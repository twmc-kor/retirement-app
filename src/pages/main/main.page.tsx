import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../components';

const MainPage = (): JSX.Element => {
    return (
        <MainWrapper>
            <Header back title="꽃길 레터" />
            <Outlet />
        </MainWrapper>
    );
};

export default MainPage;

const MainWrapper = styled.div`
    width: 360px;
`;
