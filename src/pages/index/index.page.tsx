import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
    Container,
    DefaultButton,
    Icon,
    IndexContainer,
} from '../../components/styles';

const IndexPage = (): JSX.Element => {
    const navigation = useNavigate();

    const handleEntrance = () => {
        navigation('/onboarding');
    };
    return (
        <IndexContainer>
            <Container hasHeader>
                <ImgBg src="/img/onboarding/index_bg.svg" />
                <Img src="/img/onboarding/index_elmt.svg" />
                <Button onClick={handleEntrance}>
                    <Icon
                        src="/img/onboarding/index_btn.svg"
                        width="216px"
                        height="46px"
                    />
                </Button>
            </Container>
        </IndexContainer>
    );
};

export default IndexPage;

const ImgBg = styled.img`
    position: relative;
    height: 100vh;
`;

const Img = styled.img`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
`;

const Button = styled(DefaultButton)`
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%);
`;
