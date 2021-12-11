
// import swipper
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';
import './swiperPaginationStyle.css';

// import utils
import useWindowSize from '../../utils/useWindowSize';
import { SCREEN_BREAKPOINTS } from '../../utils/constants';

SwiperCore.use([Pagination]);

const imagesList = [
    'https://picsum.photos/1190/420?img=3',
    'https://picsum.photos/1190/420?img=4',
    'https://picsum.photos/1190/420?img=5',
]

export default function DiscoverySlider() {
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    return (
        <Swiper
            slidesPerView={isSm ? 1 : 1.3}
            spaceBetween={32}
            pagination={{
                "clickable": true
            }}
            style={{
                margin: isSm ? '16px' : '32px 48px',
                paddingTop: '32px',
                overflow: 'visible',
            }}>
            {imagesList.map((item, idx) => (
                <SwiperSlide key={idx}>
                    <img
                        style={{
                            width: '100%',
                            height: isSm ? '200px' : '322px',
                            borderRadius: isSm ? '16px' : '30px'
                        }}
                        src={item}
                        alt={`images ${idx}`}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}