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
    /**
     * register: 등록 버튼
     * content: 컨텐츠가 포함된 버튼
     * placeholder: 비어있는 버튼
     */
    variant: 'register' | 'content' | 'placeholder';
    /** 포스트 데이터 */
    post: IPost;
    /** 클릭 핸들러 */
    onClick: (id: IPost['id']) => void;
}
/**
 * 이미지 타입
 */
export enum ImageTypeEnum {
    MALE_01 = 'MALE_01',
    MALE_02 = 'MALE_02',
    MALE_03 = 'MALE_03',
    MALE_04 = 'MALE_04',
    FEMALE_01 = 'FEMALE_01',
    FEMALE_02 = 'FEMALE_02',
    FEMALE_03 = 'FEMALE_03',
    FEMALE_04 = 'FEMALE_04',
    FEMALE_05 = 'FEMALE_05',
}
/**
 * 이미지 버튼
 */
export interface IImageButton {
    /** 이미지 타입 */
    type: IPost['imageType'];
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
}
/**
 * 팝업 모달
 */
export interface IModal {
    /** 메세지 */
    message: string;
}
/**
 * Drawer
 */
export interface IDrawer {
    /** 열기 여부 */
    open: boolean;
    /** 하위 컴포넌트 */
    children: JSX.Element;
}
