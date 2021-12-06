// import swiper
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss';

// import css
import './PlaylistDetail.css'

import ShowMoreText from "react-show-more-text";

// import react
import { useState } from 'react';

// import MUI components
import {
    Box,
    Avatar,
    Typography,
    Button,
    Rating,
    TableContainer,
    Paper,
    Table,
    TableBody,
    TableRow,
    TableCell,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// import icons
import { Share, StarEmpty, StarFill, Speaker, Play } from '../../components/Icons/index';


// import other components
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import { RateModal, AfterRateModal } from './RateModal';
import ShareModal from '../../components/Shared/ShareModal';
import InfoLabel from '../../components/Shared/InfoLabel';
import InfoValue from '../../components/Shared/InfoValue';

// import utils
import { flexStyle } from '../../utils/flexStyle';
import { SCREEN_BREAKPOINTS, COLORS, TEXT_STYLE } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

const ShowTextBtn = (content) => (
    <Button
        endIcon={content === 'Xem thêm' ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        sx={{
            color: COLORS.second,
            ...TEXT_STYLE.VZ_Caption_2,
            textTransform: 'none',
            ...flexStyle('center', 'center'),
            width: '100%'
        }}
    >
        {content}
    </Button>
)

SwiperCore.use([Navigation]);

export default function PlatlistDetail() {

    const windowSize = useWindowSize();
    const [openRateModal, setOpenRateModal] = useState(false);
    const [openAfterRateModal, setOpenAfterRateModal] = useState(false);
    const [openShareModal, setOpenShareModal] = useState(false);
    const isSm = windowSize.width > SCREEN_BREAKPOINTS.sm ? false : true;
    const coverImgHeight = isSm ? 182 : 380;
    const infoPanelHeight = isSm ? 190 : 150;

    const SuggestdBooks = [
        {
            src: 'https://picsum.photos/201/201?img=1',
            alt: 'image 1'
        },
        {
            src: 'https://picsum.photos/201/201?img=2',
            alt: 'image 2'
        },
        {
            src: 'https://picsum.photos/201/201?img=3',
            alt: 'image 3'
        },
        {
            src: 'https://picsum.photos/201/201?img=4',
            alt: 'image 4'
        },
        {
            src: 'https://picsum.photos/201/201?img=5',
            alt: 'image 5'
        },
        {
            src: 'https://picsum.photos/201/201?img=6',
            alt: 'image 6'
        }
    ]

    const audiosList = [
        {
            id: 1,
            title: 'Cách Nghĩ Để thành công trong cuộc sống thời hiện tại',
            duration: '14.24'
        },
        {
            id: 2,
            title: 'Trở về thôn quê',
            duration: '14.24'
        },
        {
            id: 3,
            title: '01.4 Tiến tới nghề nông Không-Làm-Gì-Cả',
            duration: '14.24'
        },
        {
            id: 4,
            title: 'Cách Nghĩ Để thành công trong cuộc sống thời hiện tại',
            duration: '14.24'
        },
        {
            id: 5,
            title: 'Trở về cuội nguồn',
            duration: '14.24'
        },
        {
            id: 6,
            title: 'Một lý do kiến nông nghiệp tự nhiên chưa được tốt',
            duration: '14.24'
        },
        {
            id: 7,
            title: 'Khi con người không hiểu được tự nhiên',
            duration: '14.24'
        },
        {
            id: 8,
            title: 'Bốn nguyên tắc',
            duration: '14.24'
        },
        {
            id: 9,
            title: 'Cách nghĩ để thành công trong cuộc sống hiện đại',
            duration: '14.24'
        }
    ]

    const playlistInfo = [
        {
            label: <InfoLabel title='Tác giả' />,
            value: <InfoValue value='Ken Honda' />
        },
        {
            label: <InfoLabel title='Thời lượng' />,
            value: <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content }}>3 giờ 9 phút 25 giây</Typography>
        },
        {
            label: <InfoLabel title='Kênh' />,
            value: <InfoValue value='NXB Tổng Hợp TP.HCM' />
        },
        {
            label: <InfoLabel title='Người đọc' />,
            value: <InfoValue value='Ngyễn lan Anh' />
        },
        {
            label: <InfoLabel title='Giá bán lẻ' />,
            value:
                <Box sx={{ ...flexStyle('flex-start', 'center'), columnGap: '6px' }}>
                    <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content, textDecoration: 'line-through' }}>50.000đ</Typography>
                    <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.white }}>20.000đ</Typography>
                </Box>

        },
        {
            label: <InfoLabel title='Đánh giá' />,
            value:
                <Box sx={{ ...flexStyle('flex-start', 'center'), columnGap: '2px' }}>
                    <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content }}>4.5</Typography>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#754ADA" />
                    </svg>
                    <Typography sx={{ ...TEXT_STYLE.content2, color: COLORS.VZ_Text_content }}>(123)</Typography>
                </Box>
        }
    ]

    const handleOpenRateModal = () => {
        setOpenRateModal(true)
    }


    const handleOpenShareModal = () => {
        setOpenShareModal(true)
    }

    return (
        <Box
            sx={{
                ...flexStyle('center', 'center'),
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    height: `${coverImgHeight}px`,
                    width: '100%',
                    top: 0
                }}
            >
                <img style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    left: 0,
                }} alt="cover img alt" src="https://picsum.photos/1190/420?img=3"></img>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    position: 'relative',
                    marginTop: `${coverImgHeight}px`
                }}
            >
                <Box
                    sx={{
                        backgroundColor: COLORS.bg2,
                        height: `${infoPanelHeight}px`
                    }}
                >
                    <Box sx={{
                        padding: '20px',
                        ...(isSm ? {
                            ...flexStyle('center', 'flex-start'),
                            flexDirection: 'column'

                        } : {
                            ...flexStyle('flex-start', 'center')
                        })
                    }}>
                        <Box
                            sx={{
                                ...flexStyle('flex-start', 'center'),
                                width: '100%',
                                flexDirection: 'column'
                            }}
                        >
                            <Box
                                sx={{
                                    ...flexStyle('flex-start', 'flex-start'),
                                    width: '100%'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: isSm ? '40%' : '30%',
                                        transform: 'translateY(-60%)'
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: isSm ? '136px' : '262px',
                                            height: isSm ? '136px' : '262px',
                                            maxWidth: '100%',
                                        }} alt="Remy Sharp" src="https://picsum.photos/1190/420?img=3"
                                        variant="rounded"
                                    />
                                </Box>
                                {
                                    !isSm && (
                                        <Box
                                            sx={{
                                                ...flexStyle('center', 'flex-start'),
                                                flexDirection: 'column',
                                                rowGap: isSm ? '16px' : '25px',
                                                margin: '0 40px',
                                                width: '50%'
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
                                                    color: COLORS.white
                                                }}>Nói ít lại làm nhiều hơn
                                            </Typography>
                                            <Box onClick={handleOpenRateModal}>
                                                <Rating
                                                    sx={{
                                                        columnGap: '24px'
                                                    }}
                                                    emptyIcon={<StarEmpty />}
                                                    icon={<StarFill />}
                                                    name="playlist-rate" value={1} precision={0.5} readOnly />
                                            </Box>
                                        </Box>
                                    )
                                }
                                <Box
                                    sx={{
                                        width: isSm ? '60%' : '20%',
                                        ...flexStyle('center', 'center'),
                                        columnGap: isSm ? '24px' : '35px'
                                    }}
                                >
                                    <Box onClick={handleOpenShareModal}>
                                        <Share bgfill='#373944' stroke='none' fill='white'></Share>
                                    </Box>
                                    <ShareModal isSm={isSm} open={openShareModal} setOpen={setOpenShareModal}></ShareModal>
                                    <RateModal isSm={isSm} open={openRateModal} setOpen={setOpenRateModal} setOpenAfterRate={setOpenAfterRateModal} />
                                    <AfterRateModal isSm={isSm} open={openAfterRateModal} setOpen={setOpenAfterRateModal} />
                                    <Button
                                        sx={{
                                            textTransform: 'none',
                                            ...TEXT_STYLE.title1,
                                            color: COLORS.white,
                                            bgcolor: COLORS.main,
                                            height: '48px',
                                            borderRadius: '22px',
                                            padding: '13px 23px'
                                        }}
                                    >+ Đánh dấu</Button>
                                </Box>
                            </Box>
                            {
                                isSm && (
                                    <Box
                                        sx={{
                                            ...flexStyle('center', 'center'),
                                            flexDirection: 'column',
                                            rowGap: isSm ? '16px' : '25px',
                                            marginTop: '-50px',
                                            width: '70%'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                                                color: COLORS.white
                                            }}>Nói ít lại làm nhiều hơn
                                        </Typography>
                                        <Box onClick={handleOpenRateModal}>
                                            <Rating
                                                sx={{
                                                    columnGap: '24px'
                                                }}
                                                emptyIcon={<StarEmpty />}
                                                icon={<StarFill />}
                                                name="playlist-rate" value={1} precision={0.5} readOnly />
                                        </Box>
                                    </Box>
                                )
                            }
                        </Box>
                    </Box>
                </Box >
            </Box >
            {
                isSm && (
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '16px',
                            width: '100%',
                            padding: '16px',
                            boxSizing: 'border-box',
                            bgcolor: COLORS.bg2,
                            borderRadius: '10px',
                            margin: '16px 0'
                        }}
                    >
                        <Button
                            sx={{
                                bgcolor: COLORS.main,
                                width: '50%',
                                borderRadius: '6px',
                                ...TEXT_STYLE.title1,
                                color: COLORS.white,
                                textTransform: 'none',
                                height: '48px'
                            }}
                            startIcon={<Play />}
                        >Phát tất cả</Button>
                        <Button
                            sx={{
                                bgcolor: COLORS.second,
                                width: '50%',
                                borderRadius: '6px',
                                ...TEXT_STYLE.title1,
                                color: COLORS.white,
                                textTransform: 'none',
                                height: '48px'
                            }}
                            startIcon={<Speaker />}
                        >Nghe thử</Button>
                    </Box>
                )
            }
            <Box
                sx={{
                    ...flexStyle('center', 'flex-start'),
                    width: '100%',
                    columnGap: '32px',
                    padding: isSm ? 0 : '48px',
                    boxSizing: 'border-box',
                    ...(isSm && { flexDirection: 'column' })
                }}
            >
                <Box
                    sx={{
                        width: isSm ? '100%' : '35%',
                        bgcolor: COLORS.bg2,
                        padding: isSm ? '26px 0 0 15px' : '26px 32px',
                        borderRadius: '10px'
                    }}
                >
                    <Typography
                        sx={{
                            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                            color: COLORS.white,
                            marginBottom: isSm ? '30px' : '38px'
                        }}
                    >Giới thiệu</Typography>
                    <Box
                        sx={{
                            ...flexStyle('flex-start', 'center'),
                            columnGap: '20px'
                        }}
                    >
                        <TableContainer
                            sx={{
                                width: '100%',
                                bgcolor: 'transparent',
                                boxShadow: 'none'
                            }}
                            component={Paper}>
                            <Table
                                aria-label="playlist info tbl">
                                <TableBody>
                                    {playlistInfo.map((row, idx) => (
                                        <TableRow
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell
                                                sx={{
                                                    borderBottom: 'none',
                                                    padding: '0 0 21px 0'
                                                }}
                                                component="th" scope="row"
                                            >
                                                {row.label}
                                            </TableCell>
                                            <TableCell
                                                sx={{
                                                    borderBottom: 'none',
                                                    padding: '0 0 21px 0',
                                                    textAlign: 'left'
                                                }}
                                                align="right"
                                            >{row.value}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                ...TEXT_STYLE.title2,
                                color: COLORS.white,
                                marginBottom: '8px'
                            }}
                        >Lời tựa</Typography>

                        <ShowMoreText
                            lines={3}
                            more={ShowTextBtn('Xem thêm')}
                            less={ShowTextBtn('Thu gọn')}
                            className="truncated-text"
                            anchorClass="my-anchor-css-class"
                            expanded={false}
                            width={isSm ? 400 : 1000}
                            truncatedEndingComponent={"... "}
                        >
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.content2,
                                    color: COLORS.VZ_Text_content,
                                    marginBottom: '16px',
                                    maxWidth: '90%'
                                }}
                            >Cuốn sách này được viết ra sau trận động đất lớn ở quê hương Kobe của tác giả vào năm 1995 và trận “đại địa chấn” ởTohoku năm 2011. Ken Honda đã lồng vào đó.

                                Cuốn sách này được viết ra sau trận động đất lớn ở quê hương Kobe của tác giả vào năm 1995 và trận “đại địa chấn” ởTohoku năm 2011. Ken Honda đã lồng vào đó. Cuốn sách này được viết ra sau trận động đất lớn ở quê hương Kobe của tác giả vào năm 1995 và trận “đại địa chấn” ởTohoku năm 2011. Ken Honda đã lồng vào đó ...
                            </Typography>
                        </ShowMoreText>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                ...TEXT_STYLE.title2,
                                color: COLORS.white,
                                marginBottom: '15px',
                                marginTop: isSm ? '26px' : '16px'
                            }}
                        >Có thể bạn muốn nghe</Typography>
                        {
                            !isSm && (
                                <Box
                                    sx={{
                                        ...flexStyle('flex-start', 'center'),
                                        flexWrap: 'wrap',
                                        columnGap: '5px',
                                        rowGap: '5px'
                                    }}
                                >
                                    {
                                        SuggestdBooks.map((item, idx) => (
                                            <Thumbnail
                                                key={idx}
                                                style={{
                                                    width: '32%',
                                                    height: '32%'
                                                }}
                                                avtSrc={item.src} alt={item.alt} />
                                        ))
                                    }
                                </Box>
                            )
                        }
                        {
                            isSm && (
                                <Swiper slidesPerView='auto' spaceBetween={10} >
                                    {SuggestdBooks.map((item, idx) => (
                                        <SwiperSlide key={idx} style={{ width: 'auto' }}>
                                            <Thumbnail
                                                key={idx}
                                                style={{
                                                    width: '96px',
                                                    height: '96px'
                                                }}
                                                avtSrc={item.src} alt={item.alt} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )
                        }
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: isSm ? '100%' : '65%',
                        ...flexStyle('center', 'center'),
                        flexDirection: 'column',
                        rowGap: '32px',
                        height: '100%',
                        marginTop: isSm ? '16px' : 0
                    }}
                >
                    {
                        !isSm && (
                            <Box
                                sx={{
                                    ...flexStyle('center', 'center'),
                                    columnGap: '24px',
                                    width: '100%',
                                    padding: '31px 24px',
                                    boxSizing: 'border-box',
                                    bgcolor: COLORS.bg2,
                                    borderRadius: '10px'
                                }}
                            >
                                <Button
                                    sx={{
                                        bgcolor: COLORS.main,
                                        width: '50%',
                                        borderRadius: '6px',
                                        ...TEXT_STYLE.title1,
                                        color: COLORS.white,
                                        textTransform: 'none',
                                        height: '48px'
                                    }}
                                    startIcon={<Play />}
                                >Phát tất cả</Button>
                                <Button
                                    sx={{
                                        bgcolor: COLORS.second,
                                        width: '50%',
                                        borderRadius: '6px',
                                        ...TEXT_STYLE.title1,
                                        color: COLORS.white,
                                        textTransform: 'none',
                                        height: '48px'
                                    }}
                                    startIcon={<Speaker />}
                                >Nghe thử</Button>
                            </Box>
                        )
                    }
                    <Box
                        sx={{
                            bgcolor: COLORS.bg2,
                            width: '100%',
                            padding: isSm ? '26px 15px 0 15px' : '26px 32px 0 26px',
                            boxSizing: 'border-box',
                            borderRadius: '10px'
                        }}
                    >
                        <Typography
                            sx={{
                                ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                                color: COLORS.white,
                                marginBottom: isSm ? '26px' : '32px'
                            }}
                        >Danh sách audios</Typography>
                        <Box>
                            <List sx={{ width: '100%' }}>
                                {audiosList.map((value) => {
                                    return (
                                        <ListItem
                                            sx={{
                                                paddingLeft: 0,
                                                paddingRight: '20px',
                                                borderTop: `.5px solid ${COLORS.placeHolder}`,
                                                height: '72px'
                                            }}
                                            key={value.id}
                                            secondaryAction={
                                                <Typography
                                                    sx={{
                                                        ...TEXT_STYLE.content2,
                                                        color: COLORS.bg4
                                                    }}
                                                >{value.duration}</Typography>
                                            }
                                        >
                                            <ListItemButton role={undefined} onClick={() => (1)} dense>
                                                <ListItemIcon sx={{ minWidth: '22px' }}>
                                                    <Typography
                                                        sx={{
                                                            ...TEXT_STYLE.title1,
                                                            color: COLORS.bg4
                                                        }}
                                                    >{value.id}</Typography>
                                                </ListItemIcon>
                                                <ListItemText
                                                    sx={{
                                                        'span': {
                                                            ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                                            color: COLORS.white
                                                        }
                                                    }}
                                                    id={`label-${value.id}`} primary={value.title} />
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    bgcolor: COLORS.bg2,
                    width: '100%',
                    padding: isSm ? '16px' : '26px 0',
                    boxSizing: 'border-box',
                    ...flexStyle('center', 'center'),
                    columnGap: '24px'
                }}
            >
                <Button
                    sx={{
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        width: isSm ? '50%' : '20%',
                        borderRadius: '6px',
                        ...TEXT_STYLE.title1,
                        color: COLORS.white,
                        textTransform: 'none',
                        height: '48px'
                    }}
                    variant="outlined"
                >Thêm vào giỏ hàng</Button>
                <Button
                    sx={{
                        bgcolor: COLORS.main,
                        width: isSm ? '50%' : '20%',
                        borderRadius: '6px',
                        ...TEXT_STYLE.title1,
                        color: COLORS.white,
                        textTransform: 'none',
                        height: '48px'
                    }}
                >Mua gói VIP</Button>
            </Box>
        </Box >
    )
}