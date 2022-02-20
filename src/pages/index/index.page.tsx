import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
    Container,
    DefaultButton,
    // Icon,
    Text,
    IndexContainer,
} from '../../components/styles';
import { useAnalytics } from '../../hooks/useAnalytics.hook';
import { AnalyticsScreenEnum, AnalyticsTypeEnum } from '../../services';
import { Styles } from '../../style/styles';

const IndexPage = (): JSX.Element => {
    const navigation = useNavigate();

    const logEvent = useAnalytics(AnalyticsScreenEnum.INDEX);

    const handleEntrance = () => {
        logEvent(AnalyticsTypeEnum.ENTER_SCREEN);
        // navigation('/onboarding');
        navigation('/main/class-room');
    };

    return (
        <IndexContainer>
            <Container fullHeight>
                <ImgBg src="/img/onboarding/index_bg.svg" />
                {/* <Img src="/img/onboarding/index_elmt.svg" /> */}
                <ContentWrapper>
                    <Title>꽃길레터</Title>
                    <Img src="/img/index_photo.jpeg" />
                    <Text noti></Text>
                    <Button onClick={handleEntrance}>
                        {/* <Icon
                        src="/img/onboarding/index_btn.svg"
                        width="100%"
                        height="100%"
                    /> */}
                        후기 보러가기
                    </Button>
                </ContentWrapper>
            </Container>
        </IndexContainer>
    );
};

export default IndexPage;

const Title = styled.span`
    ${Styles.FONT.TITLE_NAME};
    font-size: 50px;
    color: ${Styles.COLOR.SUB_BUTTON};
    margin-bottom: 50px;
`;

const ImgBg = styled.img`
    position: relative;
    width: 100vw;
`;

const ContentWrapper = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    /* position: absolute;
    z-index: 1;
    top: 0;
    left: 0; */
    width: 100%;
`;

const Button = styled(DefaultButton)`
    /* z-index: 5;
    position: absolute;
    bottom: 60px;
    left: 50%; */
    width: 216px;
    height: 46px;
    margin-top: 100px;
    /* transform: translate(-50%); */
    background-color: #566cdb;
    ${Styles.FONT.MODAL_TEXT};
    color: ${Styles.COLOR.WHITE};
`;
