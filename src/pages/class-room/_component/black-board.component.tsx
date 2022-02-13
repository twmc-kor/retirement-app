import React, { FC } from 'react';
import Countdown from 'react-countdown';
import styled, { css } from 'styled-components';
import { Styles } from '../../../style/styles';

/**
 * 칠판
 */

type CountdownType = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
};

export const BlackBoard: FC = () => {
    const Completionist = () => <Text>전달되었어요! 감사합니다!</Text>;

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed,
    }: CountdownType) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <div>
                    <Text day>D - {days}</Text>
                    <Text time>
                        {hours}시간 {minutes}분 {seconds}초 후 전달됩니다!
                    </Text>
                </div>
            );
        }
    };
    return (
        <Wrapper>
            <BlackBoardWrapper>
                <CountdownWrapper>
                    <Text>메세지가</Text>
                    <Countdown date="2022-02-18T18:00:00" renderer={renderer} />
                </CountdownWrapper>
            </BlackBoardWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.span`
    display: flex;
`;

const BlackBoardWrapper = styled.div`
    width: 320px;
    height: 200px;
    background-image: url('/img/black-board_img.svg');
`;

const CountdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: -10px;
`;

const Text = styled.span<{ day?: boolean; time?: boolean; complete?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${Styles.COLOR.WHITE};

    ${Styles.FONT.NOTI_TEXT};

    ${({ day }) =>
        day &&
        css`
            margin-top: -5px;
            ${Styles.FONT.TITLE_NAME};
        `}

    ${({ time }) =>
        time &&
        css`
            margin-bottom: -5px;
        `} /* ${({ complete }) =>
        complete &&
        css`
            margin-bottom: -5px;
        `} */
`;
