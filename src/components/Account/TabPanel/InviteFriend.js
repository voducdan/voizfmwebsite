// import react
import { useEffect } from 'react';

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

// import react share
import {
    EmailShareButton,
    FacebookShareButton,
    FacebookMessengerShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from "react-share";

import ShareModal from '../../../components/Shared/ShareModal';

// import utils
import { flexStyle } from '../../../utils/flexStyle';
import { COLORS, TEXT_STYLE } from '../../../utils/constants';

const socials = [
    {
        name: 'email',
        component: () => (
            <EmailShareButton url='http://13.251.106.4/'>
                <EmailIcon />
            </EmailShareButton>
        )
    },
    {
        name: 'facebook',
        component: () => (
            <FacebookShareButton url='http://13.251.106.4/'>
                <FacebookIcon />
            </FacebookShareButton>
        )
    },
    {
        name: 'messenger',
        component: () => (
            <FacebookMessengerShareButton url='http://13.251.106.4/'>
                <FacebookMessengerIcon />
            </FacebookMessengerShareButton>
        )
    },
    {
        name: 'linkedln',
        component: () => (
            <LinkedinShareButton url='http://13.251.106.4/'>
                <LinkedinIcon />
            </LinkedinShareButton>
        )
    },
    {
        name: 'telegram',
        component: () => (
            <TelegramShareButton url='http://13.251.106.4/'>
                <TelegramIcon />
            </TelegramShareButton>
        )
    },
    {
        name: 'twitter',
        component: () => (
            <TwitterShareButton url='http://13.251.106.4/'>
                <TwitterIcon />
            </TwitterShareButton>
        )
    },
    {
        name: 'whatapps',
        component: () => (
            <WhatsappShareButton url='http://13.251.106.4/'>
                <WhatsappIcon />
            </WhatsappShareButton>
        )
    },
]

const PanelContent = (props) => {
    const { isSm, open, setOpen } = props;
    const url = window.location.origin;
    return (
        <ShareModal url={url} isSm={isSm} open={open} setOpen={setOpen}></ShareModal>
    )
}

export default function InviteFriend(props) {
    const { open, setOpen, isSm, value } = props;
    return (
        <TabPanel value={value} index={2} children={PanelContent({ isSm, open, setOpen })}></TabPanel>
    )
}