import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../components/button.component';
import { Modal } from '../../components/modal.component';
import { PageTitle, Container, Text } from '../../components/styles';
import { Styles } from '../../style/styles';

const MessagePage = (): JSX.Element => {
    const navigate = useNavigate();

    const [message, setMessage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSaveButton = () => {
        // Post작업
        // const bodyData = {
        //     nickname: name,
        //     message: message,
        //     imageType: '',
        // }
        // fetch('https://us-central1-enoveh-toy.cloudfunctions.net', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(bodyData),
        // }).then((res) => res.json).then((json) => )
        navigate('/loading');

        // 1. 저장 누르면
        // 2. loading 상태값 변화하면서..?
        // 3. loading 중일 때 loading 이미지 띄우기
        // 4. post 전송이 완료되면
        // 5. class-room 페이지로 이동

        /** 닉네임 중복체크 */
        // if () {
        //     return (
        //         <Modal
        //         iconUrl="/img/icon/alert_icon.svg"
        //         close={closeModal}
        //         visible={openModal}
        //         bgColor="grey"
        //         closeBtn="close"
        //     >
        //         이미 사용중인 닉네임입니다!
        //     </Modal>
        //     );
        // }
    };

    const closeModal = () => {
        console.log('have to close modal');
        setOpenModal(false);
    };

    useEffect(() => {
        console.log('open modal');
        setOpenModal(true);
    }, []);

    return (
        <Container>
            <Modal
                iconUrl="/img/alert_modal.svg"
                close={closeModal}
                visible={openModal}
            />
            <PageTitle>메세지를 입력해주세요</PageTitle>
            <LetterWrapper>
                <Text noti>※ 메세지는 수신인만 볼수 있습니다! ※</Text>
                <TextField
                    placeholder={`교장선생님!\n항상 꽃길만 걸으시길\n응원하겠습니다!`}
                    value={message}
                    onChange={handleMessageChange}
                />
                <UserNameWrapper>
                    닉네임:
                    <UserNameInput
                        placeholder="입력하기"
                        value={name}
                        onChange={handleNameChange}
                        maxLength={6}
                    />
                </UserNameWrapper>
                <Button
                    onClick={handleSaveButton}
                    title="저장"
                    disabled={!message || !name}
                />
            </LetterWrapper>
        </Container>
    );
};

export default MessagePage;

const LetterWrapper = styled.div`
    position: relative;
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
    color: ${Styles.COLOR.TEXT};

    &:focus {
        outline: none;
    }

    &::placeholder {
        ${Styles.FONT.USER_NAME};
        color: ${Styles.COLOR.TEXT};
    }
`;
