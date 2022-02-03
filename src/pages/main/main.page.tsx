import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../components';

const MainPage = (): JSX.Element => {
    return (
        <MainWrapper>
            <Header back title="꽃길 레터" />
            <OutletWrapper>
                <Outlet />
            </OutletWrapper>
        </MainWrapper>
    );
};

export default MainPage;

const MainWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const OutletWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
`;
