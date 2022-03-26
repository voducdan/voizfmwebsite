//import react 
import { useState, useRef } from 'react';

// import MUI components
import {
    Typography,
    Box
} from '@mui/material';

// import swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from '../../../node_modules/swiper/react/swiper-react.js';

// import icons
import { CarouselPrev, CarouselNext } from '../../components/Icons/index';

// import utils
import { TEXT_STYLE, COLORS } from '../../utils/constants'

SwiperCore.use([Navigation]);

export default function CategoryBar(props) {
    const { parent, categoryList, isSm, onSelectCategory, hasNavigation } = props
    const [activeCategory, setActiveCategory] = useState(parent);
    const [showNavigationBtn, setShowNavigationBtn] = useState(false);
    const newCategoryList = [
        {
            code: parent,
            name: "Tất cả",
            sub_name: null
        },
        ...categoryList
    ]

    const navigationNewContentPrevRef = useRef(null);
    const navigationNewContentNextRef = useRef(null);

    const SwiperBtnNext = {
        position: 'absolute',
        right: '-18px',
        width: '24px',
        height: '24px',
        top: '2px',
        zIndex: 2,
        cursor: 'pointer',
        ...((isSm || !showNavigationBtn) && { display: 'none' })
    }

    const SwiperBtnPrev = {
        position: 'absolute',
        left: '-18px',
        width: '24px',
        height: '24px',
        top: '2px',
        zIndex: 2,
        cursor: 'pointer',
        ...((isSm || !showNavigationBtn) && { display: 'none' })
    }

    const handleSelectCategory = (e) => {
        const channeId = e.currentTarget.id;
        setActiveCategory(channeId);
        onSelectCategory(parent, channeId);
    }

    return (
        <Box
            onMouseOver={() => { setShowNavigationBtn(true); }}
            onMouseOut={() => { setShowNavigationBtn(false); }}
            sx={{
                position: 'relative'
            }}
        >
            <Swiper
                navigation={{
                    prevEl: navigationNewContentPrevRef.current,
                    nextEl: navigationNewContentNextRef.current
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationNewContentPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNewContentNextRef.current;
                }}
                slidesPerView='auto'
                spaceBetween={isSm ? 20 : 40}
                style={{
                    marginTop: isSm ? 20 : 35
                }}
            >
                {newCategoryList.map(item => (
                    <SwiperSlide
                        key={item?.code}
                        style={{
                            width: 'auto'
                        }}
                    >
                        {
                            (String(item?.code) !== activeCategory) && (
                                <Typography
                                    id={item?.code}
                                    onClick={handleSelectCategory}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.VZ_Text_content,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer'
                                    }}
                                    key={item?.code}>
                                    {item.name}
                                </Typography>
                            )
                        }
                        {
                            (String(item?.code) === activeCategory) && (
                                <Typography
                                    id={item.code}
                                    onClick={handleSelectCategory}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.white,
                                        bgcolor: COLORS.bg3,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                        padding: '5px 15px',
                                        borderRadius: '25px',
                                        boxSizing: 'border-box',
                                        '&:hover': {
                                            bgcolor: COLORS.bg3
                                        }
                                    }}
                                >{item.name}</Typography>
                            )
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
            {
                hasNavigation && (
                    <div
                        style={{
                            ...SwiperBtnPrev
                        }}
                        ref={navigationNewContentPrevRef}
                    >
                        <CarouselPrev></CarouselPrev>
                    </div>
                )
            }
            {
                hasNavigation && (
                    <div
                        style={{
                            ...SwiperBtnNext
                        }}
                        ref={navigationNewContentNextRef}
                    >
                        <CarouselNext></CarouselNext>
                    </div>
                )
            }

        </Box>
    )
}