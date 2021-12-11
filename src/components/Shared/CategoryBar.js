// import MUI components
import {
    Typography,
    Box
} from '@mui/material';

// import swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';

// import utils
import { TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants'

SwiperCore.use([Navigation]);

export default function CategoryBar(props) {
    const { categoryList, isSm } = props
    return (
        <Box >
            <Swiper slidesPerView='auto' spaceBetween={40} style={{ marginTop: isSm ? 20 : 35 }}>
                {categoryList.map((item, idx) => (
                    <SwiperSlide key={idx} style={{ width: 'auto' }}>
                        <Typography sx={{
                            ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                            fontFamily: FONT_FAMILY,
                            color: COLORS.VZ_Text_content,
                            ...(idx === 0 && { marginLeft: 0 }),
                            whiteSpace: 'nowrap',
                        }} key={idx}>{item}
                        </Typography>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}