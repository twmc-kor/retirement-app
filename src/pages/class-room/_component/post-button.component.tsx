import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { Styles } from '../../../style/styles';
import { IPostButton } from '../../../components/interface';
import { DefaultButton, Icon } from '../../../components/styles';
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
                <div style={{ position: 'relative' }}>
                    <Icon
                        src={`/img/user-type/${post.imageType}.svg`}
                        width="96px"
                        height="112px"
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'rgba(0,0,0,0.5)',
                            paddingTop: 8,
                            paddingBottom: 8,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'white',
                            }}
                        >
                            {post.nickname}
                        </Text>
                    </div>
                </div>
            );
        }
        return <Icon src="/img/smile_bg.svg" width="96px" height="112px" />;
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
            />
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

const Text = styled.span`
    margin-top: 15px;
    ${Styles.FONT.SUB_TEXT};
    color: ${Styles.COLOR.MAIN_TEXT};
`;
