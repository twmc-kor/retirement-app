import React, { useMemo } from 'react';
import styled from 'styled-components';
import { BlackBoard } from './_component/black-board.component';
import { PostTotalCount } from './_component/post-total-count.component';
import { Container, PageTitle } from '../../components/styles';
import { PostList } from './_component/post-list.component';
import Indicator from '../../components/indicator.component';
import { useFetchPosts } from '../../hooks/useFetch.hook';

const ClassRoomPage = (): JSX.Element => {
    /**
     * 게시물 패치 훅
     * 마운트 시 패치 작동
     */
    const [posts, loading] = useFetchPosts();

    const messageCount = useMemo(() => posts.length, [posts]);

    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0, 0);
    const theDate = new Date('2022/02/18');

    /** D-day 표시 */
    const theDay = (theDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);

    const renderEmptyState = () => {
        return (
            <EmptyStateWrapper>
                <Indicator />
            </EmptyStateWrapper>
        );
    };

    return (
        <Container>
            <PageTitleWrapper>
                <PageTitle sub>
                    지금까지
                    <PostTotalCount count={messageCount} />
                    개의 마음이 전달되었어요!
                </PageTitle>
            </PageTitleWrapper>
            <BlackBoard />
            {loading ? renderEmptyState() : <PostList posts={posts} />}
        </Container>
    );
};

export default ClassRoomPage;

const PageTitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const EmptyStateWrapper = styled.div`
    padding: 30px;
`;
