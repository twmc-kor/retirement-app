import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../components';
import { BlackBoard } from '../../components/black-board.component';
import { PostTotalCount } from '../../components/post-total-count.component';
import { Icon, Wrapper } from '../../components/styles';

const ClassRoomPage = (): JSX.Element => {
    return (
        <Wrapper>
            <Header back={false} title={'꽃길레터'} />
            <PageTitleWrapper>
                <PageTitle>
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

const PageTitle = styled.span<{ textColor?: string }>`
    width: 195px;
    margin: 18px 30px;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    /* color: ${({ textColor }) => (textColor ? textColor : '#693f08')}; */
    color: #693f08;
`;

const BlackBoardWrapper = styled.div`
    position: relative;
`;

const Text = styled.span`
    position: absolute;
    display: flex;
    top: calc(50% - 23px);
    left: calc(50% - 50px);
    font-size: 20px;
    font-weight: 400;
    line-height: 16px;
    color: #000;
`;
