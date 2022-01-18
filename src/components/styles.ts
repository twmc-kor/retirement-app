import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 100vh;
    margin-top: 56px;
`;

export const Icon = styled.img<{ width?: string; height?: string }>`
    width: ${({ width }) => (width ? width : '24px')};
    height: ${({ height }) => (height ? height : '24px')};
`;
