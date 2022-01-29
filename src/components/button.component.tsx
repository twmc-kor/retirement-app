import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Styles } from '../style/styles';
import { IButton } from './interface';
import { DefaultButton } from './styles';

export const Button: FC<IButton> = ({ title, onClick, disabled }) => {
    return (
        <ButtonContainer onClick={onClick} disabled={disabled}>
            {title}
        </ButtonContainer>
    );
};

const ButtonContainer = styled(DefaultButton)<{ disabled?: boolean }>`
    width: 168px;
    height: 48px;
    margin-top: 100px;
    ${Styles.FONT.SUB_TEXT};
    letter-spacing: 5px;
    background-color: ${Styles.COLOR.MAIN_BUTTON};
    color: ${Styles.COLOR.WHITE};
    cursor: pointer;

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: #c5bcb8;
            pointer-events: none;
        `}
`;
