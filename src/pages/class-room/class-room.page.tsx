import React from 'react';
import styled from 'styled-components';
import { BlackBoard } from './_component/black-board.component';
// import { PostTotalCount } from './_component/post-total-count.component';
import { Container, PageTitle, Text, Icon } from '../../components/styles';
// import { PostList } from './_component/post-list.component';
// import Indicator from '../../components/indicator.component';
// import { useFetchPosts } from '../../hooks/useFetch.hook';

const ClassRoomPage = (): JSX.Element => {
    /**
     * 게시물 패치 훅
     * 마운트 시 패치 작동
     */
    // const [posts, loading] = useFetchPosts();

    // const messageCount = useMemo(() => posts.length, [posts]);

    // const renderEmptyState = () => {
    //     return (
    //         <EmptyStateWrapper>
    //             <Indicator />
    //         </EmptyStateWrapper>
    //     );
    // };

    return (
        <Container>
            <PageTitleWrapper>
                <PageTitle sub>
                    {/* 지금까지
                    <PostTotalCount count={messageCount} />
                    개의 마음이 전달되었어요! */}
                    메세지 전달이 완료되었어요!
                </PageTitle>
            </PageTitleWrapper>
            <BlackBoard />
            {/* {loading ? renderEmptyState() : <PostList posts={posts} />} */}
            <TextWrapper>
                <Text>전달 후기를 영상으로 담아보았습니다.</Text>
                <Text>{`궁금하신 분들은 클릭클릭 ! >,<`}</Text>
                <Text>
                    유튜브도 많이 놀러와주세요{' '}
                    <Icon
                        src="/img/icon/smile.png"
                        width="13px"
                        height="13px"
                        marginLeft="3px"
                    />
                </Text>
                <Text>많관부! (많은 관심 부탁해요!)</Text>
            </TextWrapper>
            <YoutubeVideo
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/TeD0cG3GEhk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></YoutubeVideo>
        </Container>
    );
};

export default ClassRoomPage;

const PageTitleWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`;

// const EmptyStateWrapper = styled.div`
//     padding: 30px;
// `;

const YoutubeVideo = styled.iframe`
    min-width: 360px;
    min-height: 215px;
`;
