// import react
import { useState, useEffect } from 'react';

// import MUI components
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Divider
} from '@mui/material';

// import others components
import CategoryBar from '../../components/Shared/CategoryBar';

// import utils
import { flexStyle } from '../../utils/flexStyle'
import { TEXT_STYLE, COLORS, SCREEN_BREAKPOINTS } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// import service
import API from '../../services/api';


export default function DiscoveryContent() {
    const windowSize = useWindowSize();
    const [categoryList, setCategoryList] = useState([]);
    const [discoveryList, setDiscoveryList] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

    useEffect(() => {
        function getChannelFromDiscovery(data) {
            return [...new Set(data.map(i => (i.channel.name)))]
        };

        async function fetchDiscoveries() {
            const api = new API();
            const res = await api.getDiscoveries();
            const data = await res.data;
            const categories = getChannelFromDiscovery(data);
            setDiscoveryList(data);
            setCategoryList([...['Tất cả'], ...categories]);
        }

        fetchDiscoveries()
    }, [])

    return (
        <Box
            sx={{
                margin: '0 48px 0 48px'
            }}
        >
            <Box
                sx={{
                    pt: '5px'
                }}
            >
                <CategoryBar categoryList={categoryList} isSm={isSm} active={activeCategory} />
            </Box>
            <Divider sx={{ borderColor: COLORS.bg2, margin: '28px 0' }} />
        </Box>
    )
}