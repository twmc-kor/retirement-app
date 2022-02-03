import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IndexContainer, DefaultButton, Icon } from '../../components/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

const SWIPER_IMGS = [
    {
        bg_img: '/img/onboarding/obd_bg1.svg',
        img: '/img/onboarding/obd_elmt1.svg',
    },
    {
        bg_img: '/img/onboarding/obd_bg2.svg',
        img: '/img/onboarding/obd_elmt2.svg',
    },
    {
        bg_img: '/img/onboarding/obd_bg3.svg',
        img: '/img/onboarding/obd_elmt3.svg',
    },
    {
        bg_img: '/img/onboarding/obd_bg4.svg',
        img: '/img/onboarding/obd_elmt4.svg',
    },
    {
        bg_img: '/img/onboarding/obd_bg5.svg',
        img: '/img/onboarding/obd_elmt5.svg',
    },
];

const OnboardingPage = (): JSX.Element => {
    SwiperCore.use([Pagination, Autoplay]);

    const navigation = useNavigate();

    const handleEntrance = () => {
        navigation('/main/class-room');
    };

    return (
        <IndexContainer>
            <Swiper
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                autoplay={{ delay: 2500, stopOnLastSlide: true }}
                spaceBetween={50}
                slidesPerView={1}
                style={{
                    width: '415px',
                    // height: '640px',
                    position: 'relative',
                }}
            >
                {SWIPER_IMGS.map((item, index) => {
                    return (
                        <SwiperSlide key={`onboarding-slide-${index}`}>
                            <ImgBg src={item.bg_img} />
                            <Img src={item.img} />
                        </SwiperSlide>
                    );
                })}

                <Button onClick={handleEntrance}>
                    <Icon
                        src="/img/onboarding/obd_btn.svg"
                        width="216px"
                        height="46px"
                    />
                </Button>
            </Swiper>
        </IndexContainer>
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

const ImgBg = styled.img`
    position: relative;
    width: 100%;
`;

const Img = styled.img<{ position?: string }>`
    /* width: 360px; */
    /* height: 640px; */
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 415px;
`;

const Button = styled(DefaultButton)`
    z-index: 1;
    position: absolute;
    bottom: 56px;
    left: 50%;
    transform: translate(-50%);
    width: 216px;
    height: 46px;
`;
