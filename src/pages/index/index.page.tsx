import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
    Container,
    DefaultButton,
    Icon,
    IndexContainer,
} from '../../components/styles';
import { useAnalytics } from '../../hooks/useAnalytics.hook';
import { AnalyticsScreenEnum, AnalyticsTypeEnum } from '../../services';

const IndexPage = (): JSX.Element => {
    const navigation = useNavigate();

    const logEvent = useAnalytics(AnalyticsScreenEnum.INDEX);

    const handleEntrance = () => {
        logEvent(AnalyticsTypeEnum.ENTER_SCREEN);
        navigation('/onboarding');
    };

    return (
        <IndexContainer>
            <Container hasHeader>
                <Img src="/img/onboarding/index_bg.svg" />
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

const Img = styled.img`
    position: relative;
    /* width: 360px;
    height: 640px; */
    /* width: 100vw; */
    height: 100vh;
`;

const Button = styled(DefaultButton)`
    position: absolute;
    bottom: 97px;
    left: 72px;
`;
