import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Styles } from '../../../style/styles';
import { ImageTypeEnum, IPostButton } from '../../../components/interface';
import { DefaultButton, Icon } from '../../../components/styles';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components';

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

export const PostButton: FC<IPostButton> = ({
    post,
    onClickPost,
    onRegister,
}) => {
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClick = () => {
        if (onRegister) {
            // 등록 페이지 전환
            navigate('/main/user-styling');
        } else if (post) {
            setOpenModal(true);
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
                <>
                    <Modal
                        iconUrl="/img/icon/alert_icon.svg"
                        close={() => setOpenModal(false)}
                        visible={openModal}
                        bgColor="grey"
                        closeBtn="close"
                    />
                    <Icon
                        // src={imageMap[ImageTypeEnum]}
                        width="96px"
                        height="112px"
                    />
                </>
            );
        }
        return <Icon src="/img/smile_bg.svg" width="96px" height="112px" />;
    };

    return (
        <ButtonWrapper onClick={handleClick} hasNothing={!onRegister || !post}>
            {renderComponent()}
        </ButtonWrapper>
    );
};

type IconWrapperType = {
    top?: string;
    left?: string;
    right?: string;
    hasNothing?: boolean;
};

const ButtonWrapper = styled(DefaultButton)<IconWrapperType>`
    margin-bottom: 16px;
    cursor: pointer;

    /* ${({ hasNothing }) =>
        hasNothing &&
        css`
            pointer-events: none;
        `} */
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
