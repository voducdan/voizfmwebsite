// import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import { RightArrow } from '../../components/Icons/index'
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT, TEXT_STYLE, FONT_FAMILY, COLORS } from '../../utils/constants'

const flexCenterStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ open }) => ({
        flexGrow: 1,
        height: '100%',
        marginTop: HEADER_HEIGHT,
        ...(!open && { marginLeft: -SCREEN_BREAKPOINTS.sm }),
    }),
);

const Title = (content) => (
    <Box sx={{
        ...flexCenterStyle,
        marginTop: { sm: '56px', xs: '40px' },
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
            }}>{item}</Typography>
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
    const fakeData = [
        {
            title: 'Truyện nói hấp dẫn',
            categories: ['Tất cả', 'Sắp phát hành', 'Tâm linh', 'Con cái', 'Kỹ năng', 'Doanh nhân', 'Thành công', 'Hạnh phúc', 'Lịch sử'],
            items: [
                { id: 1, avtSrc: 'https://picsum.photos/201/201?img=6' },
                { id: 2, avtSrc: 'https://picsum.photos/201/201?img=7' },
                { id: 3, avtSrc: 'https://picsum.photos/201/201?img=8' },
                { id: 4, avtSrc: 'https://picsum.photos/201/201?img=9' },
                { id: 5, avtSrc: 'https://picsum.photos/201/201?img=10' }
            ]
        },
        {
            title: 'Truyện nói hấp dẫn',
            categories: ['Tất cả', 'Kinh điển Việt Nam', 'Kinh điển quốc tế', 'Ngôn tình', 'Văn học QT hiện đại', 'Văn học VN hiện đại', 'Thành công', 'Trinh thám'],
            items: [
                { id: 1, avtSrc: 'https://picsum.photos/201/201?img=11' },
                { id: 2, avtSrc: 'https://picsum.photos/201/201?img=12' },
                { id: 3, avtSrc: 'https://picsum.photos/201/201?img=13' },
                { id: 4, avtSrc: 'https://picsum.photos/201/201?img=14' },
                { id: 5, avtSrc: 'https://picsum.photos/201/201?img=15' }
            ]
        },
    ]

    const fakeSuggest = [
        { id: 1, avtSrc: 'https://picsum.photos/201/201?img=1' },
        { id: 2, avtSrc: 'https://picsum.photos/201/201?img=2' },
        { id: 3, avtSrc: 'https://picsum.photos/201/201?img=3' },
        { id: 4, avtSrc: 'https://picsum.photos/201/201?img=4' },
        { id: 5, avtSrc: 'https://picsum.photos/201/201?img=5' }
    ]

    // setData(fakeData)
    // setSuggest(fakeSuggest)
    console.log(props.open)
    return (
        <Main open={props.open}>
            {/* <DrawerHeader /> */}
            <HomeCarousel windowWidth={props.windowSize.width}></HomeCarousel>
            <Box sx={{
                margin: '0 48px'
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
                        margin: '0 48px'
                    }}>
                        {Title(data.title)}
                        {CatetoryBar(data.categories)}
                        <ImageList sx={{ height: 201, overflow: 'hidden' }} cols={5} gap={20}>
                            {data.items.map((item) => (
                                <ImageListItem key={item.id}>
                                    <Thumbnail avtSrc={item.avtSrc} alt={`images ${item.id}`}></Thumbnail>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                ))
            }
        </Main>
    )
}