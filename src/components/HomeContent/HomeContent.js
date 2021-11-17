// import { useState } from 'react';
import { useRef } from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';


import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

import { RightArrow, CarouselPrev, CarouselNext } from '../../components/Icons/index'
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, DRAWER_WIDTH, TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants'

import { fakeData, fakeSuggest, newContent, authors } from '../../mockData/HomeData'

SwiperCore.use([Navigation]);


const flexCenterStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

const SwiperBtnNext = (props) => ({
    position: 'absolute',
    right: 0,
    width: '24px',
    height: '24px',
    top: '50%',
    transform: 'translate(-40px, 70%)',
    zIndex: 2,
    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
})

const SwiperBtnPrev = (props) => ({
    position: 'absolute',
    left: 0,
    width: '24px',
    height: '24px',
    top: '50%',
    transform: 'translate(28px, 70%)',
    zIndex: 2,
    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
})

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ open }) => ({
        flexGrow: 1,
        height: `calc(100% - ${HEADER_HEIGHT})`,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginTop: HEADER_HEIGHT,
        // ...(!open && { marginLeft: -SCREEN_BREAKPOINTS.sm }),
    }),
);

const Title = (content) => (
    <Box sx={{
        ...flexCenterStyle,
        marginBottom: '24px'
    }}>
        <Typography sx={{
            ...TEXT_STYLE.h2,
            fontFamily: FONT_FAMILY,
            color: COLORS.white
        }}>
            {content}
        </Typography>
        <Box sx={{ marginLeft: '11.3px', marginTop: '6px' }}>
            <RightArrow />
        </Box>
    </Box>
)

const CatetoryBar = (categoryList) => (
    <Box sx={{
        ...flexCenterStyle
    }}>
        {categoryList.map((item, idx) => (
            <Typography sx={{
                ...TEXT_STYLE.title1,
                fontFamily: FONT_FAMILY,
                color: COLORS.VZ_Text_content,
                marginLeft: '38.86px',
                ...(idx === 0 && { marginLeft: 0 }),
                whiteSpace: 'nowrap'
            }} key={idx}>{item}</Typography>
        ))}
    </Box>
)


export default function HomeContent(props) {
    // const [data, setData] = useState([])
    // const [suggest, setSuggest] = useState([])

    // setData(fakeData)
    // setSuggest(fakeSuggest)
    const navigationNewContentPrevRef = useRef(null)
    const navigationNewContentNextRef = useRef(null)
    const navigationPublisherPrevRef = useRef(null)
    const navigationPublisherNextRef = useRef(null)

    let num_items_per_line = props.windowSize.width > SCREEN_BREAKPOINTS.sm ? 5 : 3;

    return (
        <Main open={props.open}>
            <HomeCarousel windowWidth={props.windowSize.width}></HomeCarousel>
            <Box sx={{
                margin: '107px 48px 56px 48px'
            }}>
                {Title('Gợi ý cho người chưa bắt đầu')}
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
                        {Title(data.title)}
                        {data.categories && CatetoryBar(data.categories)}
                        <Swiper slidesPerView={num_items_per_line} spaceBetween={20} style={{ marginTop: 35 }}>
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
                {Title('Nội dung mới cho bạn')}
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
                    ...SwiperBtnPrev(props)
                }} ref={navigationNewContentPrevRef} ><CarouselPrev></CarouselPrev></div>
                <div style={{
                    ...SwiperBtnNext(props)
                }} ref={navigationNewContentNextRef} > <CarouselNext></CarouselNext></div>
            </Box>

            <Box sx={{
                margin: '60px 48px'
            }}>
                {Title('Tác giả nổi bật')}
                <Swiper slidesPerView={num_items_per_line} spaceBetween={20} >
                    {authors.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Thumbnail style={{ borderRadius: '50%', width: '80%', height: '80%' }} avtSrc={item.avtSrc} alt={`images ${item.id}`} ></Thumbnail>
                            <Typography sx={{
                                ...TEXT_STYLE.title1,
                                color: COLORS.white,
                                letterSpacing: 0,
                                marginTop: '22px'
                            }}>Vũ trọng phụng</Typography>
                            <Typography sx={{
                                ...TEXT_STYLE.VZ_Caption_2,
                                color: COLORS.VZ_Text_content,
                                marginTop: '8px',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
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
                {Title('Nhà xuất bản')}

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
                    ...SwiperBtnPrev(props)
                }} ref={navigationPublisherPrevRef} ><CarouselPrev></CarouselPrev></div>
                <div style={{
                    ...SwiperBtnNext(props)
                }} ref={navigationPublisherNextRef} > <CarouselNext></CarouselNext></div>
            </Box>
        </Main >
    )
}