import {
    Box
} from '@mui/material';

import useWindowSize from '../../utils/useWindowSize';
import { SCREEN_BREAKPOINTS } from '../../utils/constants';

export default function Thumbnail(props) {
    const { style, avtSrc, alt, promotion } = props;
    const windowSize = useWindowSize();
    const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100%',
                ...(promotion && {
                    '&::before': {
                        content: `'${promotion ? promotion.toUpperCase() : ''}'`,
                        background: promotion === 'vip' ? '#F68C2D' : '#754ADA',
                        fontFamily: "'fs-ui-display-medium', 'sans-serif'",
                        fontWeight: 'bold',
                        color: promotion === 'vip' ? '#FFFFFF' : '#FFFFFF',
                        fontStyle: 'italic',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        zIndex: 8,
                        fontSize: isSm ? '12px' : '15px',
                        borderBottomLeftRadius: isSm ? '30px' : '25px',
                        padding: ' 4px 0',
                        border: `1px solid ${promotion === 'vip' ? '#FDB561' : '#A4A4F8'}`,
                        width: isSm ? '41px' : '57px',
                        height: isSm ? '18px' : '20px',
                        textAlign: 'center',
                    }
                })
            }}
        >
            <img
                style={{
                    ...style,
                    cursor: 'pointer'
                }}
                src={avtSrc}
                alt={alt}
                loading="lazy"
            />
        </Box>
    )
}