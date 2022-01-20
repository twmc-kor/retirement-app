import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Header } from '../../components';
import { BlackBoard } from '../../components/black-board.component';
import { PostTotalCount } from '../../components/post-total-count.component';
import { Icon, PageTitle, Wrapper } from '../../components/styles';
import { Styles } from '../../style/styles';

const ClassRoomPage = (): JSX.Element => {
    return (
        <Wrapper>
            <Header back={false} title={'꽃길레터'} />
            <PageTitleWrapper>
                <PageTitle sub>
                    지금까지
                    <PostTotalCount count={22} />
                    개의 마음이 전달되었어요!
                </PageTitle>
            </PageTitleWrapper>
            <BlackBoardWrapper>
                <Icon src="/img/black-board.png" width="320px" height="200px" />
                <Text>메세지 전달일</Text>
                <BlackBoard dday={21} />
            </BlackBoardWrapper>
            <MessageButtonWrapper>
                <Icon
                    src="/img/sm_bg.png"
                    width="96px"
                    height="112px"
                    marginBottom="16px"
                />
                <Icon
                    src="/img/sm_bg.png"
                    width="96px"
                    height="112px"
                    marginBottom="16px"
                />
                <Icon
                    src="/img/sm_bg.png"
                    width="96px"
                    height="112px"
                    marginBottom="16px"
                />
                <Icon
                    src="/img/sm_bg.png"
                    width="96px"
                    height="112px"
                    marginBottom="16px"
                />
                <Icon
                    src="/img/sm_bg.png"
                    width="96px"
                    height="112px"
                    marginBottom="16px"
                />
                <Icon
                    src="/img/sm_bg.png"
                    width="96px"
                    height="112px"
                    marginBottom="16px"
                />
            </MessageButtonWrapper>
            <Link to="/user-styling">메세지 쓰기</Link>
        </Wrapper>
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
    top: calc(50% - 23px);
    left: calc(50% - 50px);
    ${Styles.FONT.SUB_TEXT};
    color: ${Styles.COLOR.WHITE};
`;

const MessageButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: calc(100% - 40px);
`;
