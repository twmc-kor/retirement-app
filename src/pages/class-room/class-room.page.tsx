import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Header } from '../../components';
import { BlackBoard } from './_component/black-board.component';
import { PostTotalCount } from './_component/post-total-count.component';
import { Container, Icon, PageTitle, Wrapper } from '../../components/styles';
import { Styles } from '../../style/styles';
import { ButtonWrapper } from './_component/button-wrapper.component';
import { PostButton } from './_component/post-button.component';

const ClassRoomPage = (): JSX.Element => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0, 0);
    const theDate = new Date('2022/02/18');

    /** D-day 표시 */
    const theDay = (theDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    return (
        <Container>
            <Header back={false} title={'꽃길레터'} />
            <PageTitleWrapper>
                <PageTitle sub>
                    지금까지
                    <PostTotalCount count={22} />
                    개의 마음이 전달되었어요!
                </PageTitle>
            </PageTitleWrapper>
            <BlackBoard dday={theDay} />
            <MessageButtonWrapper>
                <PostButton onRegister={() => null} />
                <PostButton onClickPost={() => null} />
                <PostButton onClickPost={() => null} />
                <PostButton onClickPost={() => null} />
                <PostButton onClickPost={() => null} />
                <PostButton onClickPost={() => null} />
            </MessageButtonWrapper>
        </Container>
    );
};

export default ClassRoomPage;

const PageTitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const BlackBoardWrapper = styled.div`
    position: relative;
`;

const Text = styled.span`
    position: absolute;
    display: flex;
    top: calc(50% - 30px);
    left: calc(50% - 50px);
    ${Styles.FONT.SUB_TEXT};
    color: ${Styles.COLOR.WHITE};
`;

const MessageButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: calc(100% - 40px);
    margin-top: 30px;
`;
