// import others component
import TabPanel from '../../../components/TabPanel/TabPanel';

// import mui components
import {
    Typography,
    Dialog,
    Box,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// import utils
import { flexStyle } from '../../../utils/flexStyle';
import { COLORS, TEXT_STYLE } from '../../../utils/constants';

const PanelContent = (props) => {

    const handleClose = () => {
        props.setOpen(false)
    }
    return (
        < Dialog
            sx={{
                '& .MuiDialog-paper': {
                    bgcolor: COLORS.bg1,
                    width: '512px',
                    height: '646px'
                }
            }}
            open={props.open} onClose={handleClose}
        >
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: COLORS.white,
                    bgcolor: COLORS.bg2
                }}
            >
                <CloseIcon />
            </IconButton>
            <Box
                sx={{
                    ...flexStyle('center', 'flex-start'),
                    width: '100%',
                    height: '100%',
                }}
            >
                <Typography sx={{
                    marginTop: '40px',
                    ...TEXT_STYLE.h1,
                    color: COLORS.white
                }}>Mời bạn bè qua</Typography>

            </Box>
        </Dialog>
    )
}

export default function InviteFriend(props) {
    const { open, setOpen } = props;
    return (
        <TabPanel value={props.value} index={2} children={PanelContent({ open, setOpen })}></TabPanel>
    )
}