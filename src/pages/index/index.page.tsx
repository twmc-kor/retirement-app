import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, DefaultButton } from '../../components/styles';
import { Styles } from '../../style/styles';

const IndexPage = (): JSX.Element => {
    const navigation = useNavigate();

    const handleEntrance = () => {
        navigation('/onboarding');
    };
    return (
        <Container>
            <Title>꽃길 레터</Title>
            <Img src="/img/ex1.png" />
            <Button onClick={handleEntrance}>입장하기</Button>
        </Container>
    );
};

export default IndexPage;

const Title = styled.span`
    margin: 56px 0 20px;
    font-family: 'KOTRAHOPE';
    font-size: 45px;
`;

const Img = styled.img`
    width: 230px;
    height: 300px;
`;

const Button = styled(DefaultButton)`
    width: 150px;
    height: 40px;
    margin-top: 20px;
    background-color: ${Styles.COLOR.HEADER};
    ${Styles.FONT.PAGE_SUB_TEXT};
    color: ${Styles.COLOR.WHITE};
`;
