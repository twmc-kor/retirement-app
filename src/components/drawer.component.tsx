import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Styles } from '../style/styles';
import { IDrawer } from './interface';
import { DefaultButton, Icon } from './styles';

export const Drawer: FC<IDrawer> = ({ open, children, close }) => {
    return (
        <>
            <DrawerBg visible={open} />
            <Wrapper visible={open}>
                <IconWrapper onClick={close}>
                    <Icon src="/img/icon/wt_close_btn.svg" />
                </IconWrapper>
                <Text>{children}</Text>
                <ImgWrapper>
                    <NameWrapper>
                        <Name>은호</Name>
                        <Name>은지</Name>
                        <Name>혜서</Name>
                    </NameWrapper>
                    <Icon src="/img/makers.svg" width="135px" height="71" />
                </ImgWrapper>
            </Wrapper>
        </>
    );
};

const DrawerBgVisible = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 0.5;
    }
`;

const DrawerBg = styled.div<{ visible?: boolean }>`
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    background-color: #4f4f4f;
    opacity: 0.7;
    align-items: center;
    overflow: hidden;
    animation: ${DrawerBgVisible} 0.3s;
`;

const Wrapper = styled.div<{ visible?: boolean }>`
    z-index: 50;
    position: absolute;
    top: 0;
    right: 0;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    width: 167px;
    height: 640px;
    background-color: ${Styles.COLOR.HEADER};
    transition: all 2s;
`;

const IconWrapper = styled(DefaultButton)`
    position: absolute;
    top: 17px;
    right: 21px;
`;

const Text = styled.div`
    position: absolute;
    top: 100px;
    padding: 0 20px;
    ${Styles.FONT.TITLE_NAME};
    color: ${Styles.COLOR.WHITE};
`;

const ImgWrapper = styled.div`
    position: absolute;
    bottom: -5px;
    right: 15px;
`;

const NameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 15px;
`;

const Name = styled.span`
    ${Styles.FONT.NOTI_TEXT};
    color: ${Styles.COLOR.WHITE};
`;
