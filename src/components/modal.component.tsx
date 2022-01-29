import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Styles } from '../style/styles';
import { IModal } from './interface';
import { DefaultButton, Icon } from './styles';

export const Modal = ({
    iconUrl,
    close,
    visible,
    bgColor,
    closeBtn = 'confirm',
    children,
}: IModal): JSX.Element => {
    return (
        <>
            <ModalBg visible={visible} bgColor={bgColor} />
            <ModalContainer
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                visible={visible}
                bgColor={bgColor === 'grey'}
            >
                <Icon src={iconUrl} width="273px" height="273px" />
                <ModalText>{children}</ModalText>
                <IconWrapper onClick={close}>
                    {closeBtn === 'close' ? (
                        <Icon
                            src="/img/icon/close_btn.svg"
                            width="16px"
                            height="16px"
                        />
                    ) : (
                        <Icon
                            src="/img/icon/confirm_btn.svg"
                            width="160px"
                            height="48px"
                            marginTop="42px"
                        />
                    )}
                </IconWrapper>
            </ModalContainer>
        </>
    );
};

const ModalBgVisible = keyframes`
  from {
        opacity: 0;
    }
    to {
        opacity: 0.5;
    }
`;

const ModalCenter = keyframes`
  from {
         margin-top:-25px;
     }
     to {
         margin-top:0;
     }
 `;

const ModalBg = styled.div<{ visible?: boolean; bgColor?: string }>`
    z-index: 10;
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    background-color: ${({ bgColor }) =>
        bgColor === 'grey' ? '#4F4F4F' : '#c2dbff'};
    opacity: 0.7;
    align-items: center;
    overflow: hidden;
    animation: ${ModalBgVisible} 0.3s;
`;

const ModalContainer = styled.div<{ visible?: boolean; bgColor?: boolean }>`
    z-index: 100;
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${Styles.FONT.MODAL_TEXT};
    color: ${Styles.COLOR.MAIN_TEXT};
    border-radius: 4px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1);
    max-height: 95%;

    position: absolute;
    right: 50%;
    top: 40%;
    transform: translateX(50%) translateY(-50%);
    animation: ${ModalCenter} 0.3s forwards;

    ${({ bgColor }) =>
        bgColor &&
        css`
            background-color: ${Styles.COLOR.WHITE};
        `}
`;

const ModalText = styled.span`
    position: absolute;
`;

const IconWrapper = styled(DefaultButton)`
    width: 160px;
    height: 48px;
`;
