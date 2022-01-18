import React, { FC } from 'react';
import styled from 'styled-components';
import { IPostTotalCount } from './interface';

/**
 * 지금까지 n개의 마음이 전달되었어요
 */
export const PostTotalCount: FC<IPostTotalCount> = ({ count }) => {
    return <Wrapper>{count}</Wrapper>;
};

const Wrapper = styled.span`
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    color: #ff6f50;
`;
