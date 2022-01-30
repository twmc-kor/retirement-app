import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { BlackBoard } from './_component/black-board.component';
import { PostTotalCount } from './_component/post-total-count.component';
import { Container, PageTitle } from '../../components/styles';
import { IPost } from '../../models';
import { PostList } from './_component/post-list.component';
import Indicator from '../../components/indicator.component';

const ClassRoomPage = (): JSX.Element => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        fetch('https://us-central1-enoveh-toy.cloudfunctions.net/posts')
            .then((res) => res.json())
            .then((json) => {
                const { posts } = json;
                if (posts) {
                    setPosts(posts);
                    setLoading(false);
                }
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
