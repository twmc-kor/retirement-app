import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Styles } from '../../../style/styles';
import { ImageTypeEnum, IPostButton } from '../../../components/interface';
import { DefaultButton, Icon, Wrapper } from '../../../components/styles';
import { useNavigate } from 'react-router-dom';

const imageMap = {
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
    [ImageTypeEnum.FEMALE_01]: '/img/user-type/male_01.svg',
} as const;

/**
 * 헤더
 */
export const PostButton: FC<IPostButton> = ({
    post,
    onClickPost,
    onRegister,
}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (onRegister) {
            // 등록 페이지 전환
            navigate('/main/user-styling');
        }
        // 포스트 상세
    };

    const renderComponent = () => {
        if (onRegister) {
            return (
                <IconWrapper>
                    <Icon
                        src="/img/icon/add_btn.svg"
                        width="25px"
                        height="25px"
                    />
                    <Text>
                        메세지
                        <br />
                        작성
                    </Text>
                </IconWrapper>
            );
        }
        if (post) {
            return (
                <Icon
                    // src={imageMap[ImageTypeEnum]}
                    width="96px"
                    height="112px"
                />
            );
        }
        return <Icon src="/img/smile_bg.svg" width="96px" height="112px" />;
    };

    return (
        <ButtonWrapper onClick={handleClick}>{renderComponent()}</ButtonWrapper>
    );
};

type IconWrapperType = {
    top?: string;
    left?: string;
    right?: string;
};

//grid로 변경해야 함

const ButtonWrapper = styled(DefaultButton)<IconWrapperType>`
    margin-bottom: 16px;
    cursor: pointer;
`;

const IconWrapper = styled(DefaultButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 112px;
    background-image: url('/img/empty_bg.svg');
`;

const Text = styled.span`
    margin-top: 15px;
    ${Styles.FONT.SUB_TEXT};
    color: ${Styles.COLOR.MAIN_TEXT};
`;
