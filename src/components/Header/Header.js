// Import react module
import { useSelector, useDispatch } from 'react-redux';

// import react router component
import { Link } from 'react-router-dom';

// Import redux reducer, actions
import { setOpen, selectOpenSidebar } from '../../redux/openSidebar';
import { selectToken } from '../../redux/token';
import { handleOpenLogin } from '../../redux/openLogin';

// Import MUI component
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import {
    IconButton,
    Toolbar,
    SvgIcon,
    Input,
    InputAdornment,
    FormControl,
    Avatar
} from '@mui/material';

// Import constant variables
import { COLORS, DRAWER_WIDTH, HEADER_HEIGHT, SCREEN_BREAKPOINTS, HEADER_HEIGHT_MB } from '../../utils/constants';
import useWindowSize from '../../utils/useWindowSize';

// Import icons
import { Search, Bookmark, Cart } from '../Icons/index';

// Import services

const SearchIcon = (idx) => {
    return (
        <SvgIcon key={idx}>
            {Search()}
        </SvgIcon>
    )
}

const BookmarkIcon = (props) => {
    return (
        <SvgIcon key={props.idx} style={{ marginTop: '3px' }}>
            {Bookmark()}
        </SvgIcon>
    )
}

const CartIcon = (props) => {
    return (
        <SvgIcon key={props.idx}>
            {Cart()}
        </SvgIcon>
    )
}

const userAvt = (props) => {
    return (
        <Link
            to="/account"
            key={props.idx}
        >
            <Avatar alt="Remy Sharp" src={props.avtSrc} sx={{ width: 40, height: 40 }} />
        </Link>
    )
}

const UserIcon = (props) => {
    return (
        <AccountCircleIcon onClick={() => { props.onOpenLogin() }} key={props.idx} />
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


export default function Header() {

    const windowSize = useWindowSize();
    const openSidebar = useSelector(selectOpenSidebar);
    const token = useSelector(selectToken);

    const dispatch = useDispatch();

    // This url will be fetched from API later
    const avtSrc = '/images/avt.png'

    const headerItems = [
        BookmarkIcon,
        CartIcon
    ]

    if (token) {
        headerItems.push(userAvt)
    } else headerItems.push(UserIcon)

    const onOpenLogin = () => {
        dispatch(handleOpenLogin())
    }

    const handleDrawerToggle = () => {
        dispatch(setOpen(!openSidebar));
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
        <AppBar position="fixed" open={openSidebar} windowwidth={windowSize.width}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{ mr: 2, ...(!showToogleIcon(openSidebar) && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    ...(windowSize.width <= SCREEN_BREAKPOINTS.sm && { justifyContent: 'flex-end' })
                }}>
                    <FormControl variant="standard" sx={{
                        marginLeft: {
                            sm: '25px'
                        }
                    }}>
                        {windowSize.width > SCREEN_BREAKPOINTS.sm && <Input
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
                        {windowSize.width <= SCREEN_BREAKPOINTS.sm && <div style={{ marginRight: '41px', marginTop: '12px' }}>{SearchIcon()}</div>}
                    </FormControl>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '13px',
                            columnGap: '35px',
                            ...(windowSize.width <= SCREEN_BREAKPOINTS.sm && { marginRight: '6px' })
                        }}
                    >
                        {headerItems.map((item, idx) => (
                            item({ idx, avtSrc, onOpenLogin })
                        ))}
                    </div>

                </div>

            </Toolbar >
        </AppBar >
    )
}
