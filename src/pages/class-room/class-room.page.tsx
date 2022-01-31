import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BlackBoard } from './_component/black-board.component';
import { PostTotalCount } from './_component/post-total-count.component';
import { Container, PageTitle } from '../../components/styles';
import { PostButton } from './_component/post-button.component';

const ClassRoomPage = (): JSX.Element => {
    const [messageCount] = useState<number>(0);
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0, 0);
    const theDate = new Date('2022/02/18');

    /** D-day 표시 */
    const theDay = (theDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    useEffect(() => {
        fetch('https://us-central1-enoveh-toy.cloudfunctions.net')
            .then((res) => res.json())
            .then((res) => {
                if (res.success) console.log('받아온 데이터는');
                // setMessageCount(data.length);
            });
    }, []);
    return (
        <Container>
            <PageTitleWrapper>
                <PageTitle sub>
                    지금까지
                    <PostTotalCount count={messageCount} />
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

const MessageButtonWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: calc(100% - 40px);
    margin-top: 30px;
`;
