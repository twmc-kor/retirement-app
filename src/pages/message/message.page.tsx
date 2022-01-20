import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../components';
import { Icon, PageTitle, Wrapper, Text } from '../../components/styles';
import { Styles } from '../../style/styles';

const MessagePage = (): JSX.Element => {
    return (
        <Wrapper>
            <Header back title="꽃길레터" />
            <PageTitle>메세지를 입력해주세요</PageTitle>
            {/* <Icon src="/img/letter_bg.png" width="320px" height="501px" /> */}
            <LetterWrapper>
                <Text noti>※ 메세지는 수신인만 볼수 있습니다! ※</Text>
                <TextField placeholder="꽃길 응원하기" />
                <UserNameWrapper>
                    닉네임:
                    <UserNameInput placeholder="입력하기" />
                </UserNameWrapper>
                <SaveButton to="/loading">저장</SaveButton>
            </LetterWrapper>
        </Wrapper>
    );
};

export default MessagePage;

const LetterWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 501px;
    /* position: absolute; */
    background-image: url('/img/letter_bg.png');
`;

const TextField = styled.textarea`
    width: 216px;
    height: 208px;
    padding: 8px;
    border: 1px dotted #b69b56;
    border-radius: 10px;
    ${Styles.FONT.MESSAGE_TEXT};
    color: ${Styles.COLOR.TEXT};
    resize: none;

    &:focus {
        outline: none;
    }
`;

const UserNameWrapper = styled.div`
    display: flex;
    align-items: center;
    width: calc(212px - 40px);
    height: 32px;
    padding: 0 20px;
    margin-top: 13px;
    border: 1px dotted #b69b56;
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

const SaveButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 48px;
    margin-top: 127px;
    background-color: ${Styles.COLOR.MAIN_BUTTON};
    color: ${Styles.COLOR.WHITE};
    border-radius: 5px;
    text-decoration: none;
    ${Styles.FONT.SUB_TEXT};
    letter-spacing: 5px;
`;
