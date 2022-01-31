import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, DefaultButton, Icon } from '../../components/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

const SWIPER_IMGS = [
    '/img/onboarding/guide_1.svg',
    '/img/onboarding/guide_2.svg',
    '/img/onboarding/guide_3.svg',
    '/img/onboarding/guide_4.svg',
    '/img/onboarding/guide_5.svg',
];

const OnboardingPage = (): JSX.Element => {
    SwiperCore.use([Pagination, Autoplay]);

    const navigation = useNavigate();

    const [showButton, setShowButton] = useState(false);

    const handleEntrance = () => {
        navigation('/main/class-room');
    };

    return (
        <Container hasHeader>
            <Swiper
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                autoplay={{ delay: 2500, stopOnLastSlide: true }}
                spaceBetween={50}
                slidesPerView={1}
                onReachEnd={() => setShowButton(true)}
                style={{
                    width: '360px',
                    height: '640px',
                }}
            >
                {SWIPER_IMGS.map((_, index) => {
                    return (
                        <SwiperSlide key={`onboarding-slide-${index}`}>
                            <Img src={SWIPER_IMGS[index]} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {showButton && (
                <Button onClick={handleEntrance}>
                    <Icon
                        src="/img/onboarding/onbd_btn.svg"
                        width="216px"
                        height="46px"
                    />
                </Button>
            )}
        </Container>
    );
};

export default OnboardingPage;

// const SwiperAnimation = keyframes`
//     from {
//         opacity: 0;
//     }
//     to {
//         opacity: 1;
//     }
// `;

const Img = styled.img`
    width: 360px;
    height: 640px;
`;

const Button = styled(DefaultButton)`
    z-index: 1;
    position: absolute;
    bottom: 97px;
    left: 72px;
    width: 216px;
    height: 46px;
`;
