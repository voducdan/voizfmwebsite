import Home from './pages/Home/Home';
import Account from './components/Account/Account';
import PlaylistDetail from './components/PlaylistDetail/PlaylistDetail';
import AudioPlay from './components/AudioPlay/AudioPlay';
import Payment from './components/Payment/Payment';
import UpVip from './components/UpVip/UpVip';
import Discovery from './components/Discovery/Discovery';
import DiscoveryDetail from './components/Discovery/DiscoveryDetail';
import Library from './components/Library/Library';
import PlaylistByCategoryLevel1 from './components/PlaylistByCategoryLevel1/PlaylistByCategoryLevel1';
import BookRequest from './components/BookRequest/BookRequest';

const ROUTES = [
    {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: <Home />,
    },
    {
        path: "/account",
        key: "APP_ACCOUNT",
        exact: true,
        component: <Account />,
    },
    {
        path: "/playlists/:id",
        key: "APP_PLAYLIST_DETAIL",
        exact: true,
        component: <PlaylistDetail />,
    },
    {
        path: "/audio-play",
        key: "APP_AUDIO_PLAY",
        exact: true,
        component: <AudioPlay />,
    },
    {
        path: "/cart",
        key: "APP_CART",
        exact: true,
        component: <Payment />,
    },
    {
        path: "/up-vip",
        key: "APP_UP_VIP",
        exact: true,
        component: <UpVip />,
    },
    {
        path: "/discoveries",
        key: "APP_DISCOVERY",
        exact: true,
        component: <Discovery />,
    },
    {
        path: "/discoveries/:id",
        key: "APP_DISCOVERY_DETAIL",
        exact: true,
        component: <DiscoveryDetail />,
    },
    {
        path: "/library",
        key: "APP_LIBRARY",
        exact: true,
        component: <Library />,
    },
    {
        path: "/audio-book",
        key: "APP_AUDIO_BOOK",
        exact: true,
        component: <PlaylistByCategoryLevel1 />,
    },
    {
        path: "/story-book",
        key: "APP_STORY_BOOK",
        exact: true,
        component: <PlaylistByCategoryLevel1 />,
    },
    {
        path: "/podcast",
        key: "APP_PODCAST",
        exact: true,
        component: <PlaylistByCategoryLevel1 />,
    },
    {
        path: "/summary-book",
        key: "APP_SUMMARY_BOOK",
        exact: true,
        component: <PlaylistByCategoryLevel1 />,
    },
    {
        path: "/children-book",
        key: "APP_CHILDREN_BOOK",
        exact: true,
        component: <PlaylistByCategoryLevel1 />,
    },
    {
        path: "/book-request",
        key: "APP_BOOK_REQUEST",
        exact: true,
        component: <BookRequest />,
    }
]

export default ROUTES
