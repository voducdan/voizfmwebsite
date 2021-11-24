// import others component
import TabPanel from '../../../components/TabPanel/TabPanel';

// import mui components
import {
    Typography,
    Dialog
} from '@mui/material';

const PanelContent = (props) => {
    console.log(props.open)
    return (
        < Dialog open={props.open} >
            <Typography>Alo</Typography>
        </Dialog>
    )
}

export default function InviteFriend(props) {
    const { open } = props;
    return (
        <TabPanel value={props.value} index={3} children={PanelContent({ open })}></TabPanel>
    )
}