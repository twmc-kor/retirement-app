import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Styles } from '../style/styles';
import { IDrawer } from './interface';
import { DefaultButton, Icon } from './styles';

/**
 * 헤더
 */
export const Drawer: FC<IDrawer> = ({ open }) => {
    const handleCloseDrawer = () => {};
    return (
        <Wrapper open={open}>
            <IconWrapper onClick={handleCloseDrawer}>
                <Icon src="/img/wt_close_btn.svg" />
            </IconWrapper>
            <Text></Text>
            <ImgWrapper>
                <Icon src="/img/makers.svg" width="135px" height="71" />
            </ImgWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div<{ open?: boolean }>`
    z-index: 100;
    visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 167px;
    height: 640px;
    background-color: ${Styles.COLOR.HEADER};

    ${({ open }) =>
        open &&
        css`
            visibility: visible;
        `}
`;

const IconWrapper = styled(DefaultButton)`
    position: absolute;
    top: 17px;
    right: 21px;
`;

const Text = styled.span`
    ${Styles.FONT.TITLE_NAME};
    color: ${Styles.COLOR.WHITE};
`;

const ImgWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 15px;
`;
