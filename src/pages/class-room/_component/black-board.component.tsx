import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Styles } from '../../../style/styles';
import { IBlackBoard } from '../../../components/interface';

/**
 * 칠판
 */
export const BlackBoard: FC<IBlackBoard> = ({ dday }) => {
    return (
        <Wrapper>
            <BlackBoardWrapper>
                {/* <Icon
                    src="/img/black-board_img.svg"
                    width="320px"
                    height="200px"
                /> */}
                <Text>메세지 전달일</Text>
                <Text day>D-{dday}</Text>
            </BlackBoardWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.span`
    display: flex;
`;

const BlackBoardWrapper = styled.div`
    z-index: -1;
    position: relative;
    width: 320px;
    height: 200px;
    background-image: url('/img/black-board_img.svg');
`;

const Text = styled.span<{ day?: boolean }>`
    position: absolute;
    display: flex;
    top: calc(50% - 40px);
    left: calc(50% - 50px);
    ${Styles.FONT.SUB_TEXT};
    color: ${Styles.COLOR.WHITE};

    ${({ day }) =>
        day &&
        css`
            top: calc(50% - 15px);
            left: calc(50% - 25px);
            ${Styles.FONT.TITLE_NAME};
        `}
`;
