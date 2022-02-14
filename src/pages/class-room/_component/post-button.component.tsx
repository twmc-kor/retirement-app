import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { IPostButton } from '../../../components/interface';
import { DefaultButton, Icon, Text } from '../../../components/styles';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components';
import { useAnalytics } from '../../../hooks/useAnalytics.hook';
import { AnalyticsScreenEnum, AnalyticsTypeEnum } from '../../../services';

export const PostButton: FC<IPostButton> = ({ post, onRegister }) => {
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState<boolean>(false);

    const logEvent = useAnalytics(AnalyticsScreenEnum.CLASSROOM);

    const handleClick = () => {
        if (onRegister) {
            // 등록 페이지 전환
            logEvent(AnalyticsTypeEnum.ENTER_SCREEN);
            logEvent(AnalyticsTypeEnum.CLICK_FOR_REGISTER);
            return navigate('/main/user-styling');
        }
        if (post) {
            // TODO: 추후 게시물 오픈해야 되는 경우 modal 함수 제거 후 상세페이지 연결: remote config?
            logEvent(AnalyticsTypeEnum.OPEN_POST);

            // 하단 게시물 클릭 시 모달이 보이지 않는 이슈 임시 해결
            window.scrollTo({ top: 0 });
            return setOpenModal(true);
        }
    };

    const renderComponent = () => {
        if (onRegister) {
            return (
                <IconWrapper>
                    <Icon
                        src="/img/icon/add_btn.svg"
                        width="25px"
                        height="25px"
                        marginBottom="15px"
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
                <PostImgWrapper>
                    <Icon
                        src={`/img/user-type/with-desk/with-desk_${post.imageType}.svg`}
                        width="96px"
                        height="112px"
                    />
                    <Text userName>{post.nickname}</Text>
                </PostImgWrapper>
            );
        } else {
            return <Icon src="/img/smile_bg.svg" width="96px" height="112px" />;
        }
    };

    return (
        <>
            <ButtonWrapper
                onClick={handleClick}
                hasNothing={!onRegister && !post}
            >
                {renderComponent()}
            </ButtonWrapper>
            <Modal
                iconUrl="/img/alert_modal2.svg"
                close={() => setOpenModal(false)}
                visible={openModal}
                closeBtn="close"
                big
            ></Modal>
        </>
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

    ${({ hasNothing }) =>
        hasNothing &&
        css`
            pointer-events: none;
        `}
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

const PostImgWrapper = styled.div`
    z-index: 1;
    position: relative;
`;
