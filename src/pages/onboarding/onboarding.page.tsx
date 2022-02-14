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
            <SwiperContainer
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000, stopOnLastSlide: true }}
                spaceBetween={50}
                slidesPerView={1}
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
            </SwiperContainer>
        </IndexContainer>
    );
};

export default OnboardingPage;

const ImgBg = styled.img`
    position: relative;
    width: 100vw;
`;

const Img = styled.img<{ position?: string }>`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`;

const SwiperContainer = styled(Swiper)`
    position: relative;
    width: 100%;

    .swiper-pagination {
        bottom: 124px !important;
    }
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
