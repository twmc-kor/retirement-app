import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, DefaultButton } from '../../components/styles';
import { Styles } from '../../style/styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

const SWIPER_IMGS = [
    {
        img_url: '/img/swipeImg.jpeg',
    },
    {
        img_url: '/img/swipeImg.jpeg',
    },
    {
        img_url: '/img/swipeImg.jpeg',
    },
    {
        img_url: '/img/swipeImg.jpeg',
    },
];

const OnboardingPage = (): JSX.Element => {
    SwiperCore.use([Pagination, Autoplay]);

    const navigation = useNavigate();

    const handleEntrance = () => {
        navigation('/main/class-room');
    };

    return (
        <Container>
            <Swiper
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                autoplay={{ delay: 2500, stopOnLastSlide: true }}
                spaceBetween={50}
                slidesPerView={1}
                style={{
                    width: '280px',
                    height: '480px',
                }}
            >
                {SWIPER_IMGS.map((item) => {
                    return (
                        <SwiperSlide>
                            <Img src={item.img_url} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Button onClick={handleEntrance}>나도 보내러 가기</Button>
        </Container>
    );
};

export default OnboardingPage;

const Img = styled.img`
    width: 280px;
    height: 430px;
`;

const Button = styled(DefaultButton)`
    width: 200px;
    height: 50px;
    margin-top: 20px;
    background-color: ${Styles.COLOR.HEADER};
    ${Styles.FONT.PAGE_SUB_TEXT};
    color: ${Styles.COLOR.WHITE};
`;
