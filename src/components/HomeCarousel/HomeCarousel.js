// import react
import { useRef, useState, useEffect } from 'react';

// import MUI components
import Box from '@mui/material/Box';

// import swiper
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react.js';


// import icons
import { CarouselNext, CarouselPrev } from '../../components/Icons/index';

// import services
import API from '../../services/api';

const SwiperBtnNext = (props) => {
    const { isSm } = props;
    return {
        position: 'absolute',
        transform: 'translateX(10px)',
        zIndex: 2,
        ...(isSm && { display: 'none' })
    }
}

const SwiperBtnPrev = (props) => {
    const { isSm } = props
    return {
        position: 'absolute',
        left: 0,
        transform: 'translateX(-15px)',
        zIndex: 2,
        ...(isSm && { display: 'none' })
    }
}

SwiperCore.use([Autoplay]);

export default function HomeCarousel(props) {

    const api = new API();

    const { isSm } = props;

    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState([]);
    const navigationNewContentPrevRef = useRef(null);
    const navigationNewContentNextRef = useRef(null);

    useEffect(() => {
        async function fetchBannerImages() {
            const res = await api.getBannerImages();
            const data = await res.data.data;
            const imagesList = data.map(i => i.image);
            setImages(imagesList);
        }

        fetchBannerImages();
    }, [])

    const handleChangeSlideClick = (isNext) => {
        let newCurrent = null;
        if (isNext) {
            newCurrent = current < (images.length - 1) ? current + 1 : current;
        }
        else {
            newCurrent = current > 0 ? current - 1 : current;
        }
        setCurrent(newCurrent);
    }

    const handleClickThumbnail = (e) => {
        const id = Number(e.currentTarget.id);
        setCurrent(id);
        e.stopPropagation();
    }

    return (
        <Box sx={{ height: isSm ? '280px' : '420px', position: 'relative', width: '100%' }}>
            <div style={{ height: '100%', width: '100%' }}>
                {images.map((image, idx) => (
                    <img
                        style={{
                            ...(idx !== current && { display: 'none' }),
                            objectFit: 'fill',
                            width: `100%`,
                            position: 'absolute',
                            height: '100%',
                            left: 0
                        }}
                        alt={image.id}
                        key={image.id}
                        src={image.original_url}
                    />
                ))}
            </div>
            <Box sx={{
                position: 'absolute',
                width: isSm ? '80%' : '30%',
                minWidth: isSm ? '288px' : '452px',
                bottom: 33,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                right: { sm: 48, xs: 0 }
            }}>
                <Swiper
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: navigationNewContentPrevRef.current,
                        nextEl: navigationNewContentNextRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationNewContentPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNewContentNextRef.current;
                    }}
                    slidesPerView={4}
                >
                    {images.map((image, idx) => (
                        <SwiperSlide
                            onClick={handleClickThumbnail}
                            id={idx}
                            key={image.id}
                            style={{
                                flexShrink: 'unset'
                            }}
                        >
                            <img
                                style={{
                                    width: isSm ? 65 : 95,
                                    height: isSm ? 35 : 45,
                                    marginLeft: '16px',
                                    ...(idx === 0 && { marginLeft: 0 }),
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    ...(idx === current && {
                                        border: '2px solid white',
                                    })
                                }}
                                alt={image.id}
                                src={image.thumb_url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div
                    onClick={() => { handleChangeSlideClick(false) }}
                    style={{
                        ...SwiperBtnPrev({ isSm })
                    }}
                    ref={navigationNewContentPrevRef}
                >
                    <CarouselPrev />
                </div>
                <div
                    onClick={() => { handleChangeSlideClick(true) }}
                    style={{
                        ...SwiperBtnNext({ isSm })
                    }}
                    ref={navigationNewContentNextRef}
                >
                    <CarouselNext />
                </div>
            </Box>
        </Box>
    )
}