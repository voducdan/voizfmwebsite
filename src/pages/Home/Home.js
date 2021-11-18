
import Box from '@mui/material/Box';

import HomeContent from "../../components/HomeContent/HomeContent"


export default function Home(props) {
    return (
        <Box>
            <HomeContent open={props.open} windowSize={props.windowSize}></HomeContent>
        </Box>
    )
}
