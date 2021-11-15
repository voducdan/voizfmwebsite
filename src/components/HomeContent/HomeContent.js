// import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

import { RightArrow, CarouselPrev, CarouselNext } from '../../components/Icons/index'
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, DRAWER_WIDTH, TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants'

import { fakeData, fakeSuggest, newContent, authors } from '../../mockData/HomeData'

const flexCenterStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ open }) => ({
        flexGrow: 1,
        height: `calc(100% - ${HEADER_HEIGHT})`,
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginTop: HEADER_HEIGHT,
        ...(open && { marginLeft: -SCREEN_BREAKPOINTS.sm }),
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

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
// }));


export default function HomeContent(props) {
    // const [data, setData] = useState([])
    // const [suggest, setSuggest] = useState([])

    // setData(fakeData)
    // setSuggest(fakeSuggest)
    return (
        <Main open={props.open}>
            {/* <DrawerHeader /> */}
            <HomeCarousel windowWidth={props.windowSize.width}></HomeCarousel>
            <Box sx={{
                margin: '107px 48px 56px 48px'
            }}>
                {Title('Gợi ý cho người chưa bắt đầu')}
                <ImageList sx={{ height: 201, overflow: 'hidden' }} cols={5} gap={20}>
                    {fakeSuggest.map((item) => (
                        <ImageListItem key={item.id}>
                            <Thumbnail avtSrc={item.avtSrc} alt={`images ${item.id}`}></Thumbnail>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            {
                fakeData.map(data => (
                    <Box sx={{
                        margin: '0 48px 56px 48px'
                    }} key={data.title}>
                        {Title(data.title)}
                        {data.categories && CatetoryBar(data.categories)}
                        <ImageList sx={{ height: 201, marginTop: '35px', overflow: 'hidden' }} cols={5} gap={20}>
                            {data.items.map((item) => (
                                <ImageListItem key={item.id}>
                                    <Thumbnail avtSrc={item.avtSrc} alt={`images ${item.id}`}></Thumbnail>
                                </ImageListItem>
                            ))}
                        </ImageList>
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
                <Box style={{
                    position: 'absolute',
                    left: 0,
                    width: '24px',
                    height: '24px',
                    top: '50%',
                    transform: 'translate(28px, 50%)',
                    zIndex: 2,
                    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
                }}>
                    <CarouselPrev></CarouselPrev>
                </Box>
                <ImageList sx={{ height: 201, overflow: 'hidden' }} cols={5} gap={20}>
                    {newContent.map((item) => (
                        <ImageListItem key={item.id}>
                            <Thumbnail style={{ height: 201 }} avtSrc={item.avtSrc} alt={`images ${item.id}`}></Thumbnail>
                        </ImageListItem>
                    ))}

                </ImageList>
                <Box style={{
                    position: 'absolute',
                    right: 0,
                    width: '24px',
                    height: '24px',
                    top: '50%',
                    transform: 'translate(-36px, 50%)',
                    zIndex: 2,
                    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
                }}>
                    <CarouselNext></CarouselNext>
                </Box>
            </Box>
            <Box sx={{
                margin: '60px 48px'
            }}>
                {Title('Tác giả nổi bật')}
                <Box >
                    <Stack direction="row" spacing={5} sx={{ justifyContent: 'center' }}>
                        {authors.map(item => (
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                fontFamily: FONT_FAMILY,
                                width: '150px'
                            }} key={item.id}>
                                <Avatar alt={"image" + item.id} src={item.avtSrc} sx={{ width: 150, height: 150 }} />
                                <Typography sx={{
                                    ...TEXT_STYLE.title1,
                                    color: COLORS.white,
                                    letterSpacing: 0,
                                    marginTop: '9.38px'
                                }}>Vũ trọng phụng</Typography>
                                <Typography sx={{
                                    ...TEXT_STYLE.VZ_Caption_2,
                                    color: COLORS.VZ_Text_content,
                                    marginTop: '8px'
                                }}>Vũ Trọng Phụng là một nhà văn, nhà báo nổi tiếng của Việt Nam giai đo ...</Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: '32px 48px 23px 48px',
                    backgroundColor: COLORS.bg2,
                    position: 'relative'
                }}>
                {Title('Nhà xuất bản')}
                <Box style={{
                    position: 'absolute',
                    left: 0,
                    width: '24px',
                    height: '24px',
                    top: '50%',
                    transform: 'translate(28px, 50%)',
                    zIndex: 2,
                    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
                }}>
                    <CarouselPrev></CarouselPrev>
                </Box>
                <ImageList sx={{ overflow: 'hidden' }} cols={5} gap={20}>
                    {newContent.map((item) => (
                        <ImageListItem key={item.id} >
                            <Thumbnail style={{ borderRadius: '6px', height: 112 }} avtSrc={item.avtSrc} alt={`images ${item.id}`}></Thumbnail>
                        </ImageListItem>
                    ))}

                </ImageList>
                <Box style={{
                    position: 'absolute',
                    right: 0,
                    width: '24px',
                    height: '24px',
                    top: '50%',
                    transform: 'translate(-36px, 50%)',
                    zIndex: 2,
                    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { display: 'none' })
                }}>
                    <CarouselNext></CarouselNext>
                </Box>
            </Box>
        </Main>
    )
}