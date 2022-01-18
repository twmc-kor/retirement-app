import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IHeader } from './interface';
import { Icon } from './styles';

/**
 * 헤더
 */
export const Header: FC<IHeader> = ({ back = true, title = '꽃길레터' }) => {
    return (
        <Wrapper>
            <IconWrapper left="20px" to="/class-room">
                {back && <Icon src="/img/back_btn.png" />}
            </IconWrapper>
            <Title>{title}</Title>
            <IconWrapper right="20px" to="">
                <Icon src="/img/menu_btn.png" />
            </IconWrapper>
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
    background-color: #c2dbff;
`;

const IconWrapper = styled(Link)<{
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
    font-weight: 400;
    font-size: 26px;
    line-height: 26px;
    color: #fff;
`;
