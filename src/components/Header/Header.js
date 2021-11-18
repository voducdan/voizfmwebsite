import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import MuiAppBar from '@mui/material/AppBar';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Avatar from '@mui/material/Avatar';

import { COLORS, DRAWER_WIDTH, HEADER_HEIGHT, SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB } from '../../utils/constants'
import { Search, Bookmark, Cart } from '../Icons/index'

const SearchIcon = (idx) => {
    return (
        <SvgIcon key={idx}>
            {Search()}
        </SvgIcon>
    )
}

const BookmarkIcon = (idx) => {
    return (
        <SvgIcon key={idx} style={{ marginTop: '3px' }}>
            {Bookmark()}
        </SvgIcon>
    )
}

const CartIcon = (idx) => {
    return (
        <SvgIcon key={idx} style={{ margin: '0 35.5px' }}>
            {Cart()}
        </SvgIcon>
    )
}

const userAvt = (idx, avtSrc) => {
    return (
        <Avatar alt="Remy Sharp" key={idx} src={avtSrc} sx={{ width: 40, height: 40 }} />
    )
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ windowwidth, open }) => ({
    height: windowwidth > SCREEN_BREAKPOINTS.sm ? HEADER_HEIGHT : HEADER_HEIGHT_MB,
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


    // This url will be fetched from API later
    let avtSrc = '/images/avt.png'

    const headerItems = [
        BookmarkIcon, CartIcon, userAvt
    ]

    const handleDrawerToggle = () => {
        props.setOpen(!props.open);
    };

    const showToogleIcon = (open) => {
        if (open && props.windowSize.width > SCREEN_BREAKPOINTS.sm) {
            return false
        }
        else if (open && props.windowSize.width <= SCREEN_BREAKPOINTS.sm) {
            return true
        }
        else if (!open) {
            return true
        }
    }

    return (
        <AppBar position="fixed" open={props.open} windowwidth={props.windowSize.width}>
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
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { justifyContent: 'flex-end' })
                }}>
                    <FormControl variant="standard" sx={{
                        marginLeft: {
                            sm: '25px'
                        }
                    }}>
                        {props.windowSize.width > SCREEN_BREAKPOINTS.sm && <Input
                            id="input-search"
                            placeholder="Tìm kiếm"
                            sx={{ color: COLORS.placeHolder }}
                            disableUnderline
                            startAdornment={
                                <InputAdornment position="start">
                                    {SearchIcon()}
                                </InputAdornment>
                            }
                        />}
                        {props.windowSize.width <= SCREEN_BREAKPOINTS.sm && <div style={{ marginRight: '41px', marginTop: '12px' }}>{SearchIcon()}</div>}
                    </FormControl>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '13px',
                            ...(props.windowSize.width <= SCREEN_BREAKPOINTS.sm && { marginRight: '6px' })
                        }}
                    >
                        {headerItems.map((item, idx) => (
                            item(idx, avtSrc)
                        ))}
                    </div>

                </div>

            </Toolbar >
        </AppBar >
    )
}
