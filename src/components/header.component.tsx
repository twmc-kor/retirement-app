import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAnalytics } from '../hooks/useAnalytics.hook';
import { AnalyticsScreenEnum, AnalyticsTypeEnum } from '../services';
import { Styles } from '../style/styles';
import { Drawer } from './drawer.component';
import { IHeader } from './interface';
import { DefaultButton, Icon } from './styles';

export const Header: FC<IHeader> = ({ back = true, title = '꽃길 레터' }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean | null>(null);

    const logEvent = useAnalytics(AnalyticsScreenEnum.ETC);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleOpenDrawer = () => {
        logEvent(AnalyticsTypeEnum.OPEN_SIDEBAR);
        setIsDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setIsDrawerOpen(false);
    };

    return (
        <Wrapper>
            <InsideWrapper>
                <IconWrapper left="20px" onClick={handleGoBack}>
                    {pathname !== '/main/class-room' && back && (
                        <Icon src="/img/icon/back_btn.svg" />
                    )}
                </IconWrapper>
                <Title>{title}</Title>
                <IconWrapper right="20px" onClick={handleOpenDrawer}>
                    <Icon src="/img/icon/menu_btn.svg" />
                </IconWrapper>
                <Drawer open={isDrawerOpen} close={handleCloseDrawer} />
            </InsideWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    height: 56px;
    background-color: ${Styles.COLOR.HEADER};
`;

const InsideWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const IconWrapper = styled(DefaultButton)<{
    top?: string;
    left?: string;
    right?: string;
}>`
    position: absolute;
    top: ${({ top }) => (top ? top : '16px')};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    cursor: pointer;
`;

const Title = styled.span`
    ${Styles.FONT.TITLE_NAME};
    color: ${Styles.COLOR.WHITE};
    cursor: default;
`;
