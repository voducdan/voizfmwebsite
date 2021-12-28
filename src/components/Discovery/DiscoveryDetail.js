// import react
import { useState, useEffect } from 'react';

// import react router dom
import { useParams, Link } from 'react-router-dom';

// import MUI components
import {
    Box,
    Typography,
    Avatar,
    Divider,
    FormControl,
    Input,
    Button
} from '@mui/material';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';

// import utils
import { flexStyle } from '../../utils/flexStyle'
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// import service
import API from '../../services/api';

const CommentItem = (props) => {
    const { data } = props
    return (
        <Box
            sx={{
                ...flexStyle('flex-start', 'flex-start'),
                columnGap: '11px'
            }}
        >
            <Box>
                {/* src = data.avatar.thumb_url */}
                <Avatar sx={{ width: '35px', height: '35px' }} alt='img alt' src='https://picsum.photos/1190/420?img=8' />
            </Box>
            <Box
                sx={{
                    ...flexStyle('center', 'flex-starrt'),
                    flexDirection: 'column',
                    rowGap: '15px'
                }}
            >
                <Box
                    sx={{
                        ...flexStyle('center', 'flex-start'),
                        flexDirection: 'column',
                        rowGap: '8px',
                        padding: '15px',
                        bgcolor: COLORS.bg2,
                        borderRadius: '10px'
                    }}
                >
                    <Typography
                        sx={{
                            ...TEXT_STYLE.title1,
                            color: COLORS.white
                        }}
                    >{data.user.first_name} {data.user.last_name}</Typography>
                    <Typography
                        style={{
                            ...TEXT_STYLE.content1,
                            color: COLORS.VZ_Text_content,
                        }}
                    >{data.content}</Typography>
                </Box>
                <Box
                    sx={{
                        ...flexStyle('flex-start', 'center'),
                        columnGap: '31px'
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '8px'
                        }}
                    >
                        <CommentOutlinedIcon sx={{ color: COLORS.contentIcon, width: '14px', height: '14px' }} />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content3,
                                color: COLORS.contentIcon,
                            }}
                        >
                            Trả lời
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '8px'
                        }}
                    >
                        <ThumbUpAltOutlinedIcon sx={{ color: COLORS.contentIcon, width: '14px', height: '14px' }} />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content3,
                                color: COLORS.contentIcon,
                            }}
                        >
                            {data.comment_likes_count}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '8px'
                        }}
                    >
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content3,
                                color: COLORS.contentIcon,
                            }}
                        >
                            {data.published_at}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default function DiscoveryDetail() {
    const windowSize = useWindowSize();

    const [discovery, setDiscovery] = useState({})
    const [comments, setComments] = useState([])
    const [commentContent, setCommentContent] = useState('')
    const [commentPage, setCommentPage] = useState(0)
    const { id } = useParams();

    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    const coverImgHeight = isSm ? 200 : 380;
    const pageLimit = 10;

    useEffect(() => {

        async function fetchDiscoveryDetail() {
            const api = new API();
            const res = await api.getDiscovery(id, commentPage, pageLimit);
            const data = await res.data;
            setDiscovery(data);
        };

        fetchDiscoveryDetail();
    }, []);

    useEffect(() => {
        async function fetchDiscoveryComment() {
            const api = new API();
            const res = await api.getDiscoveryComment(id);
            const data = await res.data.data;
            setComments(data);
        };

        fetchDiscoveryComment();
    }, [commentPage]);

    const handleWriteComment = (e) => {
        const content = e.target.value;
        setCommentContent(content)
    }

    return (
        <Box
            sx={{
                ...flexStyle('center', 'center'),
                flexDirection: 'column'
            }}
        >
            <Box
                sx={{
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
                    bgcolor: COLORS.bg2

                }}
            >
                <Box
                    sx={{
                        width: isSm ? '90%' : '60%',
                        margin: '0 auto'
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('flex-start', 'center'),
                            columnGap: '16px',
                            margin: isSm ? '24px 0 16px 0' : '24px 0'
                        }}
                    >
                        <Box>
                            <Avatar sx={{ width: '48px', height: '48px' }} alt="https://picsum.photos/1190/420?img=3" src="https://picsum.photos/1190/420?img=3" />
                        </Box>
                        <Box
                            sx={{
                                ...flexStyle('center', 'flex-start'),
                                flexDirection: 'column',
                                rowGap: '6px'
                            }}
                        >
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.h3,
                                    color: COLORS.white
                                }}
                            >{discovery?.channel?.name}</Typography>
                            <Typography
                                sx={{
                                    ...TEXT_STYLE.content2,
                                    color: COLORS.contentIcon
                                }}
                            >{discovery?.published_at}</Typography>
                        </Box>
                    </Box>
                    <Divider sx={{ border: `1px solid ${COLORS.blackStroker}`, mb: isSm ? '16px' : '24px' }} />
                    <Typography
                        sx={{
                            ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                            color: COLORS.white,
                            mb: isSm ? '19px' : '16px'
                        }}
                    >
                        {discovery?.summary}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: isSm ? '90%' : '60%',
                    margin: '0 auto'
                }}
            >
                <Typography
                    sx={{
                        ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h2),
                        color: COLORS.white,
                        margin: isSm ? '33px auto 24px auto' : '48px auto'
                    }}
                >
                    {discovery.discovery_contents ? discovery.discovery_contents[0].title : ''}
                </Typography>
                <Box
                    sx={{
                        height: '329px',
                        width: '100%',
                        top: 0,
                        position: 'relative'
                    }}
                >
                    <img style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        left: 0,
                    }} alt="cover img alt" src="https://picsum.photos/1190/420?img=3"></img>
                    <Link
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            textDecoration: 'none'
                        }}
                        to={`/playlists/${discovery.discovery_contents ? discovery.discovery_contents[0].playlist_id : undefined}`}
                    >
                        <Button
                            sx={{
                                ...TEXT_STYLE.title2,
                                color: COLORS.white,
                                bgcolor: COLORS.main,
                                textTransform: 'none',
                                height: '48px',
                                width: '150px',
                                borderRadius: '48px',
                                ':hover': {
                                    bgcolor: 'rgb(56 57 68 / 93%)'
                                }
                            }}
                            startIcon={<HeadphonesIcon sx={{ color: COLORS.white }} />}
                        >
                            Nghe sách
                        </Button>
                    </Link>
                </Box>
                <Typography
                    sx={{
                        ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                        color: COLORS.VZ_Text_content,
                        margin: isSm ? '23px auto 16px auto' : '48px auto 32px auto',
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {discovery.discovery_contents ? discovery.discovery_contents[0].content : ''}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: isSm ? '100%' : '60%',
                    margin: '0 auto'
                }}
            >
                <Box
                    sx={{
                        bgcolor: COLORS.bg2,
                        padding: isSm ? '16px' : '20px',
                        ...flexStyle('space-between', 'center'),
                        mb: isSm ? '24px' : '30px'
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '8px'
                        }}
                    >
                        <CommentOutlinedIcon sx={{ color: COLORS.white, width: '14px', height: '14px' }} />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content2,
                                color: COLORS.white,
                            }}
                        >
                            {discovery?.discovery_counter?.comments_count} góp ý
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            ...flexStyle('center', 'center'),
                            columnGap: '8px'
                        }}
                    >
                        <ThumbUpAltOutlinedIcon sx={{ color: COLORS.white, width: '14px', height: '14px' }} />
                        <Typography
                            sx={{
                                ...TEXT_STYLE.content2,
                                color: COLORS.white,
                            }}
                        >
                            {discovery?.discovery_counter?.likes_count} thích
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: isSm ? '90%' : '60%',
                    margin: '0 auto'
                }}
            >
                <Box
                    sx={{
                        ...flexStyle('center', 'flex-start'),
                        flexDirection: 'column',
                        rowGap: '34px'
                    }}
                >
                    {
                        comments.map(item => (
                            <CommentItem key={id} data={item} />
                        ))
                    }
                </Box>
                <Box
                    sx={{
                        ...flexStyle('flex-start', 'center'),
                        columnGap: isSm ? '16px' : '31px',
                        mt: '40px'
                    }}
                >
                    <FormControl fullWidth variant="standard">
                        <Input
                            sx={{
                                height: '40px',
                                border: `1px solid ${COLORS.placeHolder}`,
                                color: COLORS.placeHolder,
                                borderRadius: '24px',
                                padding: '0 16px',
                                boxSizing: 'border-box',
                                '& .MuiInput-input': {
                                    padding: '13px 16px',
                                    ...TEXT_STYLE.caption12
                                }
                            }}
                            disableUnderline={true}
                            id="discovery-comment"
                            value={commentContent}
                            placeholder='Gửi góp ý cho nội dung này'
                            onChange={handleWriteComment}
                            startAdornment={<BorderColorOutlinedIcon sx={{ color: COLORS.placeHolder }} position="start">$</BorderColorOutlinedIcon>}
                        />
                    </FormControl>
                    <Button
                        sx={{
                            ...TEXT_STYLE.title3,
                            color: COLORS.VZ_Text_content,
                            textTransform: 'none'
                        }}
                    >Gửi</Button>
                </Box>
            </Box>
        </Box>
    )
}