import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'ONE-Mobile-POP';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  body {
    margin: 0 auto;
    padding: 0;
  }

`;

export default GlobalStyle;

export const Styles: IStyles = {
    /** 폰트 프로토타입 */
    FONT: {
        TITLE_NAME: {
            'font-family': 'KOTRAHOPE',
            'font-size': '26px',
            'font-weight': '400',
            'line-height': '26px',
        },
        PAGE_TEXT: {
            'font-family': 'ONE-Mobile-POP',
            'font-size': '26px',
            'font-weight': '400',
            'line-height': '24px',
        },
        MODAL_TEXT: {
            'font-family': 'KOTRAHOPE',
            'font-size': '26px',
            'font-weight': '400',
            'line-height': '30px',
        },
        PAGE_SUB_TEXT: {
            'font-family': 'ONE-Mobile-POP',
            'font-size': '20px',
            'font-weight': '400',
            'line-height': '26px',
        },
        SUB_TEXT: {
            'font-family': 'KOTRAHOPE',
            'font-size': '20px',
            'font-weight': '400',
            'line-height': '18px',
        },

        MESSAGE_TEXT: {
            'font-family': 'KOTRAHOPE',
            'font-size': '18px',
            'font-weight': '400',
            'line-height': '22px',
        },

        USER_NAME: {
            'font-family': 'KOTRAHOPE',
            'font-size': '16px',
            'font-weight': '400',
            'line-height': '24px',
        },
        NOTI_TEXT: {
            'font-family': 'KOTRAHOPE',
            'font-size': '14px',
            'font-weight': '400',
            'line-height': '24px',
        },
    },
    /** 색상 프로토타입 */
    COLOR: {
        HEADER: '#C2DBFF',
        MAIN_TEXT: '#693F08',
        POINT: '#FF6F50',
        DISABLE: '#C5BCB8',
        MAIN_BUTTON: '#834E00',
        SUB_BUTTON: '#88ADFF',
        NOTI: '#48BD70',
        TEXT: '#BFBFBF',
        WHITE: '#ffffff',
    },
};

export type IStyles = {
    FONT: {
        [K in FontKeys]: {
            [key: string]: string;
        };
    };
    COLOR: {
        [K in ColorKeys]: string;
    };
};

type FontKeys =
    | 'TITLE_NAME'
    | 'PAGE_TEXT'
    | 'MODAL_TEXT'
    | 'PAGE_SUB_TEXT'
    | 'SUB_TEXT'
    | 'MESSAGE_TEXT'
    | 'USER_NAME'
    | 'NOTI_TEXT';

type ColorKeys =
    | 'HEADER'
    | 'MAIN_TEXT'
    | 'POINT'
    | 'DISABLE'
    | 'MAIN_BUTTON'
    | 'SUB_BUTTON'
    | 'NOTI'
    | 'TEXT'
    | 'WHITE';
