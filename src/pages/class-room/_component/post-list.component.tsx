import React, { FC } from 'react';
import styled from 'styled-components';
import { IPost } from '../../../models';
import { PostButton } from './post-button.component';

interface IProps {
    posts: IPost[];
}

/**
 * 게시물 목록
 */
export const PostList: FC<IProps> = ({ posts }) => {
    // const placeholders = useMemo(
    //     () => new Array(2 - (posts.length % 3)).fill(true),
    //     [posts],
    // );

    return (
        <Container>
            <PostButton onRegister={() => null} />
            {posts.map((post) => (
                <PostButton key={`post-item-${post.id}`} post={post} />
            ))}
            {/* {placeholders.map((_, i) => (
                <PostButton key={`placeholder-${i}`} />
            ))} */}
            <PostButton />
            <PostButton />
            <PostButton />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: calc(100% - 40px);
    margin-top: 30px;
`;
