import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Styles } from '../style/styles';
import { Drawer } from './drawer.component';
import { IHeader } from './interface';
import { DefaultButton, Icon } from './styles';

/**
 * 헤더
 */
export const Header: FC<IHeader> = ({ back = true, title }) => {
    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleOpenDrawer = () => {
        setIsDrawerOpen(true);
    };

    return (
        <Wrapper>
            <IconWrapper left="20px" onClick={handleGoBack}>
                {back && <Icon src="/img/back_btn.png" />}
            </IconWrapper>
            <Title>{title}</Title>
            <IconWrapper right="20px" onClick={handleOpenDrawer}>
                <Icon src="/img/menu_btn.png" />
            </IconWrapper>
            <Drawer open={isDrawerOpen} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 56px;
    background-color: ${Styles.COLOR.HEADER};
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
`;
