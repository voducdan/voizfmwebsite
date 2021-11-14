// import { useState } from 'react';

import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import { SCREEN_BREAKPOINTS, HEADER_HEIGHT } from '../../utils/constants'
import { CollectionsOutlined } from '@mui/icons-material';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ open }) => ({
        flexGrow: 1,
        // padding: theme.spacing(3),
        marginTop: HEADER_HEIGHT,
        ...(!open && { marginLeft: -SCREEN_BREAKPOINTS.sm }),
    }),
);

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
    // const fakeData = [
    //     {
    //         title: 'Truyện nói hấp dẫn',
    //         categories: ['Tất cả', 'Sắp phát hành', 'Tâm linh', 'Con cái', 'Kỹ năng', 'Doanh nhân', 'Thành công', 'Hạnh phúc', 'Lịch sử'],
    //         items: [
    //             { id: 1, avtSrc: 'https://picsum.photos/201/201?img=6' },
    //             { id: 2, avtSrc: 'https://picsum.photos/201/201?img=7' },
    //             { id: 3, avtSrc: 'https://picsum.photos/201/201?img=8' },
    //             { id: 4, avtSrc: 'https://picsum.photos/201/201?img=9' },
    //             { id: 5, avtSrc: 'https://picsum.photos/201/201?img=10' }
    //         ]
    //     },
    //     {
    //         title: 'Truyện nói hấp dẫn',
    //         categories: ['Tất cả', 'Kinh điển Việt Nam', 'Kinh điển quốc tế', 'Ngôn tình', 'Văn học QT hiện đại', 'Văn học VN hiện đại', 'Thành công', 'Trinh thám'],
    //         items: [
    //             { id: 1, avtSrc: 'https://picsum.photos/201/201?img=11' },
    //             { id: 2, avtSrc: 'https://picsum.photos/201/201?img=12' },
    //             { id: 3, avtSrc: 'https://picsum.photos/201/201?img=13' },
    //             { id: 4, avtSrc: 'https://picsum.photos/201/201?img=14' },
    //             { id: 5, avtSrc: 'https://picsum.photos/201/201?img=15' }
    //         ]
    //     },
    // ]

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
            <div>
                <Typography>Gợi ý cho người mới bắt đầu</Typography>
                <ImageList sx={{ width: 201, height: 201 }} cols={5} rowHeight={201} gap={20}>
                    {fakeSuggest.map((item) => (
                        <ImageListItem key={item.id}>
                            <Thumbnail avtSrc={item.avtSrc} alt={`images ${item.id}`}></Thumbnail>
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        </Main>
    )
}