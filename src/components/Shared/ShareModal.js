// import react
import { useState } from "react";

// import MUI components
import {
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    Box,
    Tooltip,
    IconButton
} from "@mui/material";

// import react share
import {
    FacebookShareButton,
    FacebookMessengerShareButton
} from "react-share";

// import icons
import { FacebookClassic, MessengerClassic, Hyperlink, QR } from '../../components/Icons/index';

// import utils
import { COLORS, TEXT_STYLE } from '../../utils/constants';
import { flexStyle } from '../../utils/flexStyle';


export default function ShareModal(props) {

    const { url, open, setOpen, isSm } = props;
    const shareIconSize = isSm ? 40 : 48;
    const [openCopyLinkTooltop, setOpenCopyLinkTooltop] = useState(false);
    const [openQRcodeDialog, setOpenQRcodeDialog] = useState(false);
    const handleClose = () => {
        setOpen(false)
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        setOpenCopyLinkTooltop(true);
        setTimeout(() => {
            setOpenCopyLinkTooltop(false);
        }, 500);
    };

    const handleCloseQRCodeDialog = () => {

    }

    const handleCreateQR = () => {

    }

    const shareItems = [
        {
            label: 'Facebook',
            icon: <FacebookShareButton url={url}><FacebookClassic size={shareIconSize} /> </FacebookShareButton>
        },
        {
            label: 'Messenger',
            icon: <FacebookMessengerShareButton url={url}><MessengerClassic size={shareIconSize} /></FacebookMessengerShareButton>
        },
        {
            label: 'Link',
            icon: (
                <Tooltip
                    PopperProps={{
                        disablePortal: true,
                    }}
                    open={openCopyLinkTooltop}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Sao chép link thành công!"
                >
                    <IconButton
                        sx={{
                            p: 0
                        }}
                        onClick={handleCopyLink}
                    >
                        <Hyperlink size={shareIconSize} />
                    </IconButton>
                </Tooltip>
            )
        },
        {
            label: 'QR Code',
            icon: <QR onClick={handleCreateQR} size={shareIconSize} />
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
            {/* QRCode dialog */}
            <Dialog
                open={openQRcodeDialog}
                onClose={handleCloseQRCodeDialog}
            >
                <DialogTitle >
                    "Use Google's location service?"
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Dialog>
    )
}