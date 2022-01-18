import React, { FC } from 'react';
import styled from 'styled-components';
import { IBlackBoard } from './interface';

/**
 * 칠판
 */
export const BlackBoard: FC<IBlackBoard> = ({ dday }) => {
    return <Wrapper>D-{dday}</Wrapper>;
};

const Wrapper = styled.span`
    position: absolute;
    top: calc(50% - 3px);
    left: calc(50% - 25px);
    font-size: 26px;
    font-weight: 400;
    line-height: 26px;
    color: #fff;
`;
