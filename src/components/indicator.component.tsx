import React from 'react';
import styled from 'styled-components';
import { Styles } from '../style/styles';

interface IProps {}

export default function Indicator(props: IProps) {
    return (
        <Container viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="45"></Circle>
        </Container>
    );
}

const Container = styled.svg`
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

const Circle = styled.circle`
    fill: none;
    stroke: ${Styles.COLOR.MAIN_TEXT};
    stroke-linecap: round;
    stroke-width: 10;
    animation: draw 3s ease-in-out infinite;
    @keyframes draw {
        0% {
            stroke-dasharray: 20, 282.6;
        }
        50% {
            stroke-dasharray: 200, 282.6;
        }
        100% {
            stroke-dasharray: 20, 282.6;
        }
    }
`;
