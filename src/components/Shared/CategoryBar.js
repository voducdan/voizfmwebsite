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
import { TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants'

SwiperCore.use([Navigation]);

export default function CategoryBar(props) {
    const { categoryList, isSm, active } = props

    return (
        <Box >
            <Swiper
                slidesPerView='auto'
                paceBetween={40}
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
                            (idx !== active) && (
                                <Typography sx={{
                                    ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                    color: COLORS.VZ_Text_content,
                                    marginLeft: idx === 0 ? 0 : '38px',
                                    whiteSpace: 'nowrap',
                                }}
                                    key={idx}>
                                    {item}
                                </Typography>
                            )
                        }
                        {
                            (idx === active) && (
                                <Chip
                                    key={idx}
                                    label={item}
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                        color: COLORS.VZ_Text_content,
                                        marginLeft: idx === 0 ? 0 : '38px',
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