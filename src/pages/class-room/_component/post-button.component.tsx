import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { IPostButton } from '../../../components/interface';
import { DefaultButton, Icon, Text } from '../../../components/styles';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../../components';

export const PostButton: FC<IPostButton> = ({ post, onRegister }) => {
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleClick = () => {
        if (onRegister) {
            // 등록 페이지 전환
            return navigate('/main/user-styling');
        }
        if (post) {
            // TODO: 추후 게시물 오픈해야 되는 경우 modal 함수 제거 후 상세페이지 연결: remote config?
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
                hasNothing={!onRegister || !post}
            >
                {renderComponent()}
            </ButtonWrapper>
            <Modal
                iconUrl="/img/icon/alert_icon.svg"
                close={() => setOpenModal(false)}
                visible={openModal}
                bgColor="grey"
                closeBtn="close"
            >
                <Text modal>메세지는 수신인만</Text>
                <Text modal>열람이 가능합니다!</Text>
            </Modal>
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

const PostImgWrapper = styled.div`
    z-index: 1;
    position: relative;
`;
