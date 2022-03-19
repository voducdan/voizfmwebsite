// import react
import { useEffect } from 'react';

// import others component
import TabPanel from '../../../components/TabPanel/TabPanel';
import ShareModal from '../../../components/Shared/ShareModal';

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