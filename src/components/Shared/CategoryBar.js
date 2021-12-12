//import react 
import { useState } from 'react';

// import MUI components
import {
    Typography,
    Box,
    Chip
} from '@mui/material';

// import swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';

// import style
import './style.css';

// import utils
import { TEXT_STYLE, COLORS } from '../../utils/constants'

SwiperCore.use([Navigation]);

export default function CategoryBar(props) {
    const { categoryList, isSm, onSelectCategory } = props
    const [activeCategory, setActiveCategory] = useState(0);

    const handleSelectCategory = (e) => {
        const channeId = e.target.id
        setActiveCategory(Number(channeId))
        onSelectCategory()
    }

    return (
        <Box >
            <Swiper
                slidesPerView='auto'
                spaceBetween={40}
                style={{
                    marginTop: isSm ? 20 : 35
                }}
            >
                {categoryList.map((item, idx) => (
                    <SwiperSlide
                        key={idx}
                        style={{
                            width: 'auto'
                        }}
                    >
                        {
                            (idx !== activeCategory) && (
                                <Typography
                                    id={item.id}
                                    onClick={handleSelectCategory}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.VZ_Text_content,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer'
                                    }}
                                    key={idx}>
                                    {item.name}
                                </Typography>
                            )
                        }
                        {
                            (idx === activeCategory) && (
                                <Chip
                                    id={item.id}
                                    onClick={handleSelectCategory}
                                    key={idx}
                                    label={item.name}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.VZ_Text_content,
                                        bgcolor: COLORS.bg3,
                                        whiteSpace: 'nowrap',
                                    }}
                                />
                            )
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}