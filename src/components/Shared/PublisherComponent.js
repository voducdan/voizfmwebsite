// import react
import { useRef } from 'react';

// import MUI components
import {
    Typography,
    Box
} from '@mui/material';

// import swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react.js';


// import others components
import Thumbnail from '../../components/Thumbnail/Thumbnail';

// import icons
import { RightArrow, CarouselPrev, CarouselNext } from '../../components/Icons/index';

// import utils
import { TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle'

SwiperCore.use([Navigation]);

const SwiperBtnNext = (props) => {
    const { isSm } = props;
    return {
        position: 'absolute',
        right: 0,
        width: '24px',
        height: '24px',
        top: '50%',
        transform: 'translate(-40px, 70%)',
        zIndex: 2,
        ...(isSm && { display: 'none' })
    }
}

const SwiperBtnPrev = (props) => {
    const { isSm } = props
    return {
        position: 'absolute',
        left: 0,
        width: '24px',
        height: '24px',
        top: '50%',
        transform: 'translate(28px, 70%)',
        zIndex: 2,
        ...(isSm && { display: 'none' })
    }
}

const Title = (props) => {
    const { isSm, content } = props;
    return (
        < Box sx={{
            ...flexStyle('flex-start', 'center'),
            marginBottom: '24px'
        }}>
            <Typography sx={{
                ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                fontFamily: FONT_FAMILY,
                color: COLORS.white
            }}>
                {content}
            </Typography>
            <Box sx={{ marginLeft: '11.3px', marginTop: '6px' }}>
                <RightArrow fill={COLORS.white} />
            </Box>
        </ Box >
    )
}

export default function PublisherComponent(props) {
    const { isSm } = props;
    const publishers = [
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/1.png', id: 1 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/2.png', id: 2 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/3.png', id: 3 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/4.png', id: 4 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/5.png', id: 5 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/6.png', id: 6 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/7.png', id: 7 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/8.png', id: 8 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/9.png', id: 9 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/10.png', id: 10 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/11.png', id: 11 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/12.png', id: 12 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/13.png', id: 13 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/14.png', id: 14 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/15.png', id: 15 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/16.png', id: 16 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/17.png', id: 17 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/18.png', id: 18 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/19.png', id: 19 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/20.png', id: 20 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/21.png', id: 21 },
        { url: 'https://voiz-nxb.s3.cloud.cmctelecom.vn/22.png', id: 22 }
    ];
    const num_items_per_line = !isSm ? 5 : 2.5;

    const navigationPublisherPrevRef = useRef(null);
    const navigationPublisherNextRef = useRef(null);

    return (
        <Box
            sx={{
                padding: isSm ? '32px 15px 23px 15px' : '32px 48px 23px 48px',
                backgroundColor: COLORS.bg2,
                position: 'relative'
            }}>
            {<Title content="Nhà xuất bản" isSm={isSm} />}

            <Swiper
                navigation={{
                    prevEl: navigationPublisherPrevRef.current,
                    nextEl: navigationPublisherNextRef.current
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPublisherPrevRef.current;
                    swiper.params.navigation.nextEl = navigationPublisherNextRef.current;
                }}
                slidesPerView={num_items_per_line} spaceBetween={isSm ? 8 : 20}>
                {publishers.map((item) => (
                    <SwiperSlide key={item.id}>
                        <a>
                            <Thumbnail style={{ borderRadius: '6px', width: '100%', height: isSm ? '81px' : '112px' }} avtSrc={item.url} alt={`images ${item.id}`} ></Thumbnail>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div style={{
                ...SwiperBtnPrev({ isSm })
            }} ref={navigationPublisherPrevRef} ><CarouselPrev></CarouselPrev></div>
            <div style={{
                ...SwiperBtnNext({ isSm })
            }} ref={navigationPublisherNextRef} > <CarouselNext></CarouselNext></div>
        </Box>
    )
}