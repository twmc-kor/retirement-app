import styled, { css } from 'styled-components';
import { Styles } from '../style/styles';

type IconType = {
    width?: string;
    height?: string;
    marginBottom?: string;
    marginTop?: string;
};

export const Container = styled.div<{ hasHeader?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: ${({ hasHeader }) => (hasHeader ? '0' : '56px')};

    ${({ hasHeader }) =>
        hasHeader &&
        css`
            position: relative;
        `}
`;

export const Wrapper = styled.div<{ margin?: string; button?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 360px; */
    margin: ${({ margin }) => (margin ? margin : '0px')};

    ${({ button }) =>
        button &&
        css`
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(3, 1fr);
            margin-bottom: 34px;
        `}
`;

export const Icon = styled.img<IconType>`
    width: ${({ width }) => (width ? width : '24px')};
    height: ${({ height }) => (height ? height : '24px')};
    margin-bottom: ${({ marginBottom }) =>
        marginBottom ? marginBottom : '0px'};
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : '0px')};
`;

export const PageTitle = styled.span<{ sub?: boolean }>`
    margin: 28px 0 28px;
    ${Styles.FONT.PAGE_TEXT};
    color: ${Styles.COLOR.MAIN_TEXT};

    ${({ sub }) =>
        sub &&
        css`
            width: 195px;
            margin: 18px 30px;
            ${Styles.FONT.PAGE_SUB_TEXT};
        `}
`;

export const Text = styled.span<{ noti?: boolean }>`
    ${Styles.FONT.SUB_TEXT};
    color: ${Styles.COLOR.MAIN_TEXT};
    margin-bottom: 7px;

    ${({ noti }) =>
        noti &&
        css`
            margin: 9px 0 8px;
            ${Styles.FONT.NOTI_TEXT};
            color: ${Styles.COLOR.NOTI};
        `}
`;

export const DefaultButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
`;
