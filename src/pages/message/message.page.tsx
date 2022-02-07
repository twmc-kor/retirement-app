import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/button.component';
import { Modal } from '../../components/modal.component';
import { PageTitle, Container, Text } from '../../components/styles';
import { AddPostInputName, useAddPost } from '../../hooks/useFetch.hook';
import { Styles } from '../../style/styles';

const MessagePage = (): JSX.Element => {
    const navigate = useNavigate();
    const params = useParams();

    const [openModal, setOpenModal] = useState<boolean>(true);

    const {
        message,
        nickname,
        loading,
        error,
        clearError,
        commit,
        handleChangeText,
    } = useAddPost(params.imageType as string);

    const closeModal = () => {
        console.log('have to close modal');
        setOpenModal(false);
    };
    const closeErrorModal = () => {
        clearError();
    };

    const handleSubmit = () => {
        commit().then(() => navigate('/loading'));
    };

    return (
        <Container>
            <PageTitle>메세지를 입력해주세요</PageTitle>
            <LetterWrapper>
                <Text noti>※ 메세지는 수신인만 볼수 있습니다! ※</Text>
                <TextField
                    placeholder={`교장선생님!\n항상 꽃길만 걸으시길\n응원하겠습니다!`}
                    name={AddPostInputName.MESSAGE}
                    value={message}
                    onChange={handleChangeText}
                />
                <UserNameWrapper>
                    닉네임:
                    <UserNameInput
                        placeholder="입력하기"
                        name={AddPostInputName.NICKNAME}
                        value={nickname}
                        onChange={handleChangeText}
                        maxLength={6}
                    />
                </UserNameWrapper>
                <Button
                    onClick={handleSubmit}
                    title="저장"
                    disabled={!message || !nickname || loading}
                    loading={loading}
                />
            </LetterWrapper>
            {/* 모달 영역 */}
            <Modal
                iconUrl="/img/alert_modal.svg"
                close={closeModal}
                visible={openModal}
            />
            <Modal
                iconUrl="/img/icon/alert_icon.svg"
                close={closeErrorModal}
                visible={error}
                bgColor="grey"
                closeBtn="close"
            >
                <Text modal>이미 사용중인 닉네임입니다!</Text>
            </Modal>
        </Container>
    );
};

export default MessagePage;

const LetterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 496px;
    margin-top: 8px;
    background-image: url('/img/letter_bg.svg');
`;

const TextField = styled.textarea`
    width: calc(216px - 16px);
    height: 208px;
    padding: 8px;
    border: 1px dashed #b69b56;
    border-radius: 10px;
    ${Styles.FONT.MESSAGE_TEXT};
    color: ${Styles.COLOR.MAIN_BUTTON};
    resize: none;

    &:focus {
        outline: none;
    }

    &::placeholder {
        ${Styles.FONT.USER_NAME};
        color: ${Styles.COLOR.TEXT};
    }
`;

const UserNameWrapper = styled.div`
    display: flex;
    align-items: center;
    width: calc(212px - 40px);
    height: 32px;
    padding: 0 20px;
    margin-top: 13px;
    border: 1px dashed #b69b56;
    border-radius: 5px;
    ${Styles.FONT.USER_NAME};
    color: ${Styles.COLOR.MAIN_TEXT};
    background-color: ${Styles.COLOR.WHITE};
`;

const UserNameInput = styled.input`
    width: 100px;
    height: 80%;
    margin-left: 17px;
    border: none;
    ${Styles.FONT.USER_NAME};
    color: ${Styles.COLOR.MAIN_BUTTON};

    &:focus {
        outline: none;
    }

    &::placeholder {
        ${Styles.FONT.USER_NAME};
        color: ${Styles.COLOR.TEXT};
    }
`;
