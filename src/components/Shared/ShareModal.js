
// import MUI components
import {
    Typography,
    Dialog,
    Box
} from "@mui/material";

// import icons
import { FacebookClassic, MessengerClassic, Hyperlink, QR } from '../../components/Icons/index';

// import utils
import { COLORS, TEXT_STYLE } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';


export default function ShareModal(props) {

    const { open, setOpen, isSm } = props;
    const shareIconSize = isSm ? 40 : 48
    const handleClose = () => {
        setOpen(false)
    }

    const shareItems = [
        {
            label: 'Facebook',
            icon: <FacebookClassic size={shareIconSize} />
        },
        {
            label: 'Messenger',
            icon: <MessengerClassic size={shareIconSize} />
        },
        {
            label: 'Link',
            icon: <Hyperlink size={shareIconSize} />
        },
        {
            label: 'QR Code',
            icon: <QR size={shareIconSize} />
        }
    ]

    return (
        <Dialog
            onClose={handleClose} open={open}
            sx={{
                '& .MuiDialog-paper': {
                    bgcolor: COLORS.bg1,
                    borderRadius: isSm ? '10px' : '30px',
                    ...flexStyle('center', 'center'),
                    width: isSm ? '95%' : '512px',
                    margin: 0
                }
            }}>

            <Box
                sx={{
                    ...flexStyle('center', 'center'),
                    flexDirection: 'column',
                    rowGap: '40px',
                    width: '70%',
                    padding: '40px 0',
                    boxSizing: 'border-box'
                }}
            >
                <Typography
                    sx={{
                        ...TEXT_STYLE.h1,
                        color: COLORS.white
                    }}
                >Share</Typography>
                <Box
                    sx={{
                        ...flexStyle('center', 'center'),
                        columnGap: '56px'
                    }}
                >
                    {
                        shareItems.map((item, idx) => (
                            <Box
                                sx={{
                                    ...flexStyle('center', 'center'),
                                    flexDirection: 'column',
                                    rowGap: '16px',
                                    width: 'max-content'
                                }}
                                key={idx}>
                                {item.icon}
                                <Typography
                                    sx={{
                                        ...(isSm ? TEXT_STYLE.caption12 : TEXT_STYLE.content2),
                                        color: COLORS.white
                                    }}
                                >{item.label}</Typography>
                            </Box>
                        ))
                    }
                </Box>
            </Box>

        </Dialog>
    )
}