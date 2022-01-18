import { ImageTypeEnum } from '../components/interface';

/**
 * 포스트
 */
export interface IPost {
    /** 포스트 아이디 */
    id: string;
    /** 작성자 이름 */
    nickname: string;
    /** 메세지 */
    message: string;
    /** 작성시간 */
    createdAt: string;
    /** 이미지 타입 */
    imageType: ImageTypeEnum;
    /** 노출 여부 */
    disabled: boolean;
}
