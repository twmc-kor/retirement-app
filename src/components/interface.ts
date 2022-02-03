import { IPost } from '../models';

/**
 * 헤더
 */
export interface IHeader {
    /** 뒤로가기 버튼 노출 여부 */
    back?: boolean;
    /** 헤더 타이틀 */
    title: string;
}
/**
 * 지금까지 n개의 마음이 전달되었어요
 */
export interface IPostTotalCount {
    /** 게시물 수 */
    count: number;
}
/**
 * 칠판
 */
export interface IBlackBoard {
    /** D-Day */
    dday: number;
}
/**
 * 게시물 버튼
 */
export interface IPostButton {
    /** 포스트 데이터 */
    post?: IPost;
    /** 클릭 핸들러 */
    onClickPost?: (id: IPost['id']) => void;
    /** 등록 핸들러 */
    onRegister?: () => void;
}
/**
 * 이미지 타입
 */
export enum ImageTypeEnum {
    MALE_01 = '/img/user-type/MALE_01.svg',
    MALE_02 = '/img/user-type/MALE_02.svg',
    MALE_03 = '/img/user-type/MALE_03.svg',
    MALE_04 = '/img/user-type/MALE_04.svg',
    FEMALE_01 = '/img/user-type/FEMALE_01.svg',
    FEMALE_02 = '/img/user-type/FEMALE_02.svg',
    FEMALE_03 = '/img/user-type/FEMALE_03.svg',
    FEMALE_04 = '/img/user-type/FEMALE_04.svg',
    FEMALE_05 = '/img/user-type/FEMALE_05.svg',
}
/**
 * 이미지 버튼
 */
export interface IImageButton {
    /** 이미지 타입 */
    // type: IPost['imageType'];
    /** 클릭 핸들러 */
    onClick: (type: IPost['imageType']) => void;
}
/**
 * 메세지 작성 시 사용할 텍스트 폼
 */
export interface ITextInput {
    /** 텍스트 값 */
    value: string;
    /** 텍스트 업데이트 핸들러 */
    onChange: (value: string) => void;
    /** 글자수 제한 */
    maxLength: number;
    /** placeholder */
    placeholder: string;
}
/**
 * 닉네임 작성 시 사용할 텍스트 폼
 */
export interface INicknameInput extends ITextInput {}
/**
 * 버튼
 */
export interface IButton {
    /** 버튼 타이틀 */
    title: string;
    /** 클릭 핸들러 */
    onClick: () => void;
    /** 비활성 여부 */
    disabled?: boolean;
    /** 로딩 여부 */
    loading?: boolean;
}
/**
 * 팝업 모달
 */
export interface IModal {
    /** 메세지 */
    iconUrl: string;
    close: () => void;
    visible: boolean;
    bgColor?: string;
    closeBtn?: string;
    children?: string;
}
/**
 * Drawer
 */
export interface IDrawer {
    /** 열기 여부 */
    open: boolean;
    close: () => void;

    /** 하위 컴포넌트 */
    children: string;
}
