import styled, { css } from 'styled-components';
import { Styles } from '../style/styles';

type IconType = {
    width?: string;
    height?: string;
    marginBottom?: string;
    marginTop?: string;
    marginLeft?: string;
    filterColor?: boolean;
};

export const IndexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div<{ fullHeight?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 360px;
    margin-top: ${({ fullHeight }) => (fullHeight ? '0' : '56px')};

    ${({ fullHeight }) =>
        fullHeight &&
        css`
            position: relative;
        `}
`;

export const Wrapper = styled.div<{ margin?: string; button?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};

    ${({ filterColor }) =>
        filterColor &&
        css`
            filter: invert(100%) sepia(1%) saturate(7492%) hue-rotate(25deg)
                brightness(104%) contrast(104%);
        `}
`;

export const PageTitle = styled.span<{ sub?: boolean }>`
    margin: 28px 0 28px;
    ${Styles.FONT.PAGE_TEXT};
    color: ${Styles.COLOR.MAIN_TEXT};

    ${({ sub }) =>
        sub &&
        css`
            /* width: 195px; */
            margin: 18px 30px;
            ${Styles.FONT.PAGE_SUB_TEXT};
        `}
`;

export const Text = styled.span<{
    noti?: boolean;
    modal?: boolean;
    userName?: boolean;
}>`
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
    ${({ modal }) =>
        modal &&
        css`
            ${Styles.FONT.MODAL_TEXT};
            color: ${Styles.COLOR.MAIN_TEXT};
        `}

        ${({ userName }) =>
        userName &&
        css`
            z-index: 1;
            vertical-align: middle;
            overflow: hidden;
            position: absolute;
            bottom: 5px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            display: inline-block;
            ${Styles.FONT.USER_NAME};
            color: ${Styles.COLOR.WHITE};
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

    /* &:hover {
        opacity: 0.8;
    } */
`;
