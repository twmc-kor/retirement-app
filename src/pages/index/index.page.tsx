import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, DefaultButton, Icon } from '../../components/styles';

const IndexPage = (): JSX.Element => {
    const navigation = useNavigate();

    const handleEntrance = () => {
        navigation('/onboarding');
    };
    return (
        <Container hasHeader>
            <Img src="/img/onboarding/index_img.svg" />
            <Button onClick={handleEntrance}>
                <Icon
                    src="/img/onboarding/index_btn.svg"
                    width="216px"
                    height="46px"
                />
            </Button>
        </Container>
    );
};

export default IndexPage;

const Img = styled.img`
    position: relative;
    width: 360px;
    height: 640px;
`;

const Button = styled(DefaultButton)`
    position: absolute;
    bottom: 97px;
    left: 72px;
`;
