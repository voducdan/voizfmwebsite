
import Box from '@mui/material/Box';

import HomeContent from "../../components/HomeContent/HomeContent"


export default function Home(props) {
    return (
        <Box>
            <HomeContent windowSize={props.windowSize}></HomeContent>
        </Box>
    )
}
