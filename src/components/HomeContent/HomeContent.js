// import react
import { useRef } from 'react';

// import MUI components
import { styled } from '@mui/material/styles';
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

// import others components
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import CategoryBar from '../../components/Shared/CategoryBar';

// import icons
import { RightArrow, CarouselPrev, CarouselNext } from '../../components/Icons/index';

// import utils
import { SCREEN_BREAKPOINTS, TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';
import { flexStyle } from '../../utils/flexStyle'

// import fake data
import { fakeData, fakeSuggest, newContent, authors } from '../../mockData/HomeData';

SwiperCore.use([Navigation]);


const flexCenterStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    () => ({})
);

const Title = (props) => {
    const { isSm, content } = props
    return (
        < Box sx={{
            ...flexCenterStyle,
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

export default function HomeContent() {

    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    // const [data, setData] = useState([])
    // const [suggest, setSuggest] = useState([])

    // setData(fakeData)
    // setSuggest(fakeSuggest)

    const navigationNewContentPrevRef = useRef(null)
    const navigationNewContentNextRef = useRef(null)
    const navigationPublisherPrevRef = useRef(null)
    const navigationPublisherNextRef = useRef(null)

    let num_items_per_line = !isSm ? 5 : 3;

    return (
        <Main>
            <HomeCarousel windowWidth={windowSize.width}></HomeCarousel>
            <Box sx={{
                margin: '107px 48px 56px 48px'
            }}>
                {<Title content="Gợi ý cho người chưa bắt đầu" isSm={isSm} />}
                <Swiper slidesPerView={num_items_per_line} spaceBetween={20} style={{ marginTop: 35 }}>
                    {fakeSuggest.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Thumbnail style={{ width: '100%', height: '100%', borderRadius: 3 }} avtSrc={item.avtSrc} alt={`images ${item.id}`} ></Thumbnail>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            {
                fakeData.map(data => (
                    <Box sx={{
                        margin: '0 48px 56px 48px'
                    }} key={data.title}>
                        {<Title content={data.title} isSm={isSm} />}
                        {data.categories && <CategoryBar categoryList={data.categories} isSm={isSm} />}
                        <Swiper slidesPerView={num_items_per_line} spaceBetween={20}
                            style={{ marginTop: !isSm ? 35 : 20 }}
                        >
                            {data.items.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Thumbnail style={{ width: '100%', height: '100%', borderRadius: 3 }} avtSrc={item.avtSrc} alt={`images ${item.id}`} ></Thumbnail>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                ))
            }
            <Box
                sx={{
                    padding: '32px 48px 23px 48px',
                    backgroundColor: COLORS.bg2,
                    position: 'relative'
                }}>
                {<Title content="Nội dung mới cho bạn" isSm={isSm} />}
                <Swiper

                    navigation={{
                        prevEl: navigationNewContentPrevRef.current,
                        nextEl: navigationNewContentNextRef.current
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationNewContentPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNewContentNextRef.current;
                    }}
                    slidesPerView={num_items_per_line} spaceBetween={20} >
                    {newContent.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Thumbnail style={{ borderRadius: '6px', width: '100%', height: '100%' }} avtSrc={item.avtSrc} alt={`images ${item.id}`} ></Thumbnail>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div style={{
                    ...SwiperBtnPrev({ isSm })
                }} ref={navigationNewContentPrevRef} ><CarouselPrev></CarouselPrev></div>
                <div style={{
                    ...SwiperBtnNext({ isSm })
                }} ref={navigationNewContentNextRef} > <CarouselNext></CarouselNext></div>
            </Box>

            <Box sx={{
                margin: '60px 48px'
            }}>
                {<Title content="Tác giả nổi bật" isSm={isSm} />}
                <Swiper
                    slidesPerView={num_items_per_line}
                    spaceBetween={20}
                >
                    {authors.map((item) => (
                        <SwiperSlide
                            style={{
                                ...flexStyle('center', 'center'),
                                flexDirection: 'column'
                            }}
                            key={item.id}
                        >
                            <Thumbnail style={{ borderRadius: '50%', width: '80%', height: '80%' }} avtSrc={item.avtSrc} alt={`images ${item.id}`} ></Thumbnail>
                            <Typography sx={{
                                ...(!isSm ? TEXT_STYLE.title1 : TEXT_STYLE.title3),
                                color: COLORS.white,
                                letterSpacing: 0,
                                marginTop: '22px'
                            }}>Vũ trọng phụng</Typography>
                            <Typography sx={{
                                ...(!isSm ? TEXT_STYLE.VZ_Caption_2 : TEXT_STYLE.caption10Regular),
                                color: COLORS.VZ_Text_content,
                                display: '-webkit-box',
                                marginTop: '8px',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>Vũ Trọng Phụng là một nhà văn, nhà báo nổi tiếng của Việt Nam giai đo ...</Typography>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box
                sx={{
                    padding: '32px 48px 23px 48px',
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
                    slidesPerView={num_items_per_line} spaceBetween={20}>
                    {newContent.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Thumbnail style={{ borderRadius: '6px', width: '100%', height: '112px' }} avtSrc={item.avtSrc} alt={`images ${item.id}`} ></Thumbnail>
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
        </Main >
    )
}