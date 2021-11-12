import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import MuiAppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import { COLORS, DRAWER_WIDTH, HEADER_HEIGHT, SCREEN_BREAKPOINTS } from '../../utils/constants'
import useWindowSize from '../../utils/useWindowSize'
import Search from '../Icons/Search'

const SearchIcon = () => {
    return (
        <SvgIcon >
            {Search()}
        </SvgIcon>
    )
}


const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ windowwidth, open }) => ({
    height: HEADER_HEIGHT,
    backgroundColor: COLORS.bg1,
    justifyContent: 'center',
    ...(windowwidth > SCREEN_BREAKPOINTS.sm && {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: `${DRAWER_WIDTH}px`,
    }),
    ...(windowwidth <= SCREEN_BREAKPOINTS.sm && { width: '100%' }),
    ...(!open && { width: '100%' }),

}));

export default function Header(props) {

    let windowSize = useWindowSize()

    const handleDrawerToggle = () => {
        props.setOpen(!props.open);
    };

    const showToogleIcon = (open) => {
        if (open && windowSize.width > SCREEN_BREAKPOINTS.sm) {
            return false
        }
        else if (open && windowSize.width <= SCREEN_BREAKPOINTS.sm) {
            return true
        }
        else if (!open) {
            return true
        }
    }

    return (
        <AppBar position="fixed" open={props.open} windowwidth={windowSize.width}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{ mr: 2, ...(!showToogleIcon(props.open) && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <FormControl variant="standard">
                    <Input
                        id="input-search"
                        placeholder="Tìm kiếm"
                        sx={{ color: COLORS.placeHolder }}
                        disableUnderline
                        startAdornment={
                            <InputAdornment position="start">
                                {SearchIcon()}
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Toolbar>
        </AppBar>
    )
}
