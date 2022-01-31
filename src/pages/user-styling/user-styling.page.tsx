import React from 'react';
import { Container, PageTitle, Text } from '../../components/styles';
import { ImageButton } from './_component/image-button.component';

const UserStylingPage = (): JSX.Element => {
    return (
        <Container>
            <PageTitle>캐릭터를 선택해주세요</PageTitle>
            {/* <Icon src={ImageTypeEnum['MALE_01']} width="96px" height="112px" /> */}
            <ImageButton />
            <Text>캐릭터를 선택하시면 자동으로</Text>
            <Text>메세지 작성 화면으로 이동합니다.</Text>
        </Container>
    );
};

export default UserStylingPage;
