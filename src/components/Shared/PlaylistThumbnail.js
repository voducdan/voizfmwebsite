// import MUI components
import {
    Card,
    Box,
    CardContent,
    Typography,
    Button
} from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CheckIcon from '@mui/icons-material/Check';

// import utils
import { flexStyle } from '../../utils/flexStyle'
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

export default function PlaylistThumnail(props) {
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    const { src, name, authors, isBookmark, children } = props;

    const authorsString = (authors) => {
        if (Array.isArray(authors)) {
            if (authors.length > 0) {
                return authors.map(author => author.name).join(',')
            }
            return null
        }
        return authors
    }
    return (
        <Card
            sx={{
                ...flexStyle('flex-start', 'center'),
                columnGap: isSm ? '10px' : '20px',
                bgcolor: 'inherit',
                boxShadow: 'none',
                width: isSm ? '100%' : '45%',
                height: '90px'
            }}
        >

            <img
                style={{ width: isSm ? 'calc(30% - 5px)' : 'calc(30% - 10px)', height: '100%', borderRadius: '5px' }}
                // img src currently not working
                // image={src}
                src="https://picsum.photos/1190/420?img=3"
                alt={src}
            />
            <CardContent
                sx={{
                    ...flexStyle('space-between', 'flex-start'),
                    flexDirection: 'column',
                    flex: '1 0 auto',
                    p: 0,
                    height: '100%',
                    width: isSm ? 'calc(70% - 5px)' : 'calc(70% - 10px)',
                    '&:last-child': {
                        p: 0
                    }
                }}
            >
                <Box
                    sx={{
                        ...flexStyle('space-between', 'flex-start'),
                        width: '100%',
                        ...(isSm && { columnGap: '10px' })
                    }}
                >
                    <Box
                        sx={{
                            ...flexStyle('flex-start', 'flex-start'),
                            flexDirection: 'column',
                            flex: '1 0 auto',
                            rowGap: '6px',
                            width: '50%'
                        }}
                    >
                        <Typography
                            sx={{
                                ...(isSm ? TEXT_STYLE.title2 : TEXT_STYLE.title1),
                                color: COLORS.white,
                                display: '-webkit-box',
                                textOverflow: 'ellipsis',
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}
                        >
                            {name}
                        </Typography>
                        {
                            authorsString(authors) && (
                                <Box
                                    sx={{
                                        ...flexStyle('flex-start', 'center'),
                                        columnGap: '6px'
                                    }}
                                >
                                    <PersonOutlineOutlinedIcon sx={{ color: COLORS.contentIcon }} />
                                    <Typography
                                        sx={{
                                            ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                                            color: COLORS.contentIcon,
                                            display: '-webkit-box',
                                            textOverflow: 'ellipsis',
                                            WebkitLineClamp: 1,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {authorsString(authors)} {Array.isArray(authors) ? '(Tác giả)' : ''}
                                    </Typography>
                                </Box>
                            )
                        }
                        {
                            !authorsString(authors) && (
                                <Typography
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
                                        color: COLORS.contentIcon
                                    }}
                                >
                                    Không có tác giả
                                </Typography>
                            )
                        }
                    </Box>
                    {
                        isBookmark && (
                            <Button
                                sx={{
                                    ...(isSm ? TEXT_STYLE.title3 : TEXT_STYLE.title2),
                                    textTransform: 'none',
                                    color: COLORS.white,
                                    bgcolor: COLORS.bg3,
                                    borderRadius: '22px',
                                    maxWidth: '144px',
                                    width: '50%',
                                    height: '32px',
                                    '& .MuiButton-startIcon': {
                                        mr: '2px'
                                    }
                                }}
                                startIcon={<CheckIcon sx={{ color: COLORS.white, ...(isSm && { width: '12px', height: '12px' }) }} />}
                            >Hủy đánh dấu</Button>
                        )
                    }
                </Box>
                {children}
            </CardContent>
        </Card>
    )
}