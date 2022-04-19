// import react
import { useState, useEffect } from 'react';

// import MUI components
import {
    Box
} from '@mui/material';

// import swipper
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react.js';

// import utils
import useWindowSize from '../../utils/useWindowSize';
import { COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle'

// import services
import API from '../../services/api';

SwiperCore.use([Pagination]);

const CustomPaginationBullet = ({ numOfBullets, isSm, activePaginationBullet, handleClickPaginationBullet }) => {
    const ids = Array.from(Array(numOfBullets).keys());
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: isSm ? '-20px' : '-35px',
                right: '50%',
                transform: 'translateX(50%)',
                ...flexStyle('center', 'center'),
                columnGap: '16px',
            }}
        >
            {
                ids.map(idx => (
                    <Box
                        key={idx}
                        onClick={handleClickPaginationBullet}
                        id={idx}
                        sx={{
                            width: '6px',
                            height: '6px',
                            bgcolor: COLORS.blackStroker,
                            ...(activePaginationBullet === idx && {
                                border: `4.5px solid ${COLORS.main}`,
                                width: '3px',
                                height: '3px',
                                bgcolor: COLORS.white
                            }),
                            borderRadius: '50%',
                            cursor: 'pointer'
                        }}
                    ></Box>
                ))
            }
        </Box>
    )
}

export default function DiscoverySlider() {
    const api = new API();
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const [imagesList, setImages] = useState([]);
    const [activePublisherPagination, setActivePublisherPagination] = useState(0);

    useEffect(() => {
        async function fetchBannerImages() {
            const res = await api.getBannerImages();
            const data = await res.data.data;
            const images = data.map(i => i.image);
            setImages([...images, ...images, ...images]);
        }

        fetchBannerImages();
    }, [])

    const swiperPagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span id="discovery-pagination-${index}" class="${className}" style="visibility:hidden">${index + 2}</span>`;
        },
    };

    const handleClickPublisherPaginationBullet = (e) => {
        const id = Number(e.target.id);
        const bulletId = `#discovery-pagination-${id}`;
        const actualPaginationBullet = document.querySelector(bulletId);
        actualPaginationBullet.click();
        setActivePublisherPagination(id);
    }

    const handleSlideChange = (e) => {
        const realIndex = e.realIndex;
        setActivePublisherPagination(realIndex);
    }

    return (
        <Box
            sx={{
                position: 'relative'
            }}
        >
            <CustomPaginationBullet
                numOfBullets={5}
                isSm={isSm}
                activePaginationBullet={activePublisherPagination}
                handleClickPaginationBullet={handleClickPublisherPaginationBullet}
            />
            <Swiper
                onSlideChange={handleSlideChange}
                slidesPerView={isSm ? 1 : 1.3}
                spaceBetween={32}
                pagination={swiperPagination}
                slidesPerGroup={1}
                style={{
                    margin: isSm ? '16px' : '32px 48px',
                    paddingTop: '32px'
                }}>
                {imagesList.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <img
                            style={{
                                width: '100%',
                                height: isSm ? '200px' : '322px',
                                borderRadius: isSm ? '16px' : '30px'
                            }}
                            src={item?.original_url}
                            alt={`images ${idx}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}