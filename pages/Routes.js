import Home from '../src/pages/Home/Home';
import Account from '../src/components/Account/Account';
import PlaylistDetail from '../src/components/PlaylistDetail/PlaylistDetail';
import AudioPlay from '../src/components/AudioPlay/AudioPlay';
import Cart from '../src/components/Payment/Cart';
import Checkout from '../src/components/Payment/Checkout';
import Payment from '../src/components/Payment/Payment';
import UpVip from '../src/components/UpVip/UpVip';
import Discovery from '../src/components/Discovery/Discovery';
import DiscoveryDetail from '../src/components/Discovery/DiscoveryDetail';
import Library from '../src/components/Library/Library';
import PlaylistByCategoryLevel1 from '../src/components/PlaylistByCategoryLevel1/PlaylistByCategoryLevel1';
import BookRequest from '../src/components/BookRequest/BookRequest';
import Search from '../src/components/Search/Search';
import Author from '../src/components/Author/Author';
import PlaylistRanking from '../src/components/PlaylistRanking/PlaylistRanking';
import Channel from '../src/components/Channel/Channel';
import ChannelDetail from '../src/components/ChannelDetail/ChannelDetail';
import Listening from '../src/components/Listening/Listening';

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
        path: "/audio-play/:id",
        key: "APP_AUDIO_PLAY",
        exact: true,
        component: <AudioPlay />,
    },
    {
        path: "/cart",
        key: "APP_CART",
        exact: true,
        component: <Cart />,
    },
    {
        path: "/checkout",
        key: "APP_CHECKOUT",
        exact: true,
        component: <Checkout />,
    },
    {
        path: "/payment/:method",
        key: "APP_PAYMENT",
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
    },
    {
        path: "/search",
        key: "APP_SEARCH",
        exact: true,
        component: <Search />,
    },
    {
        path: "/authors/:id",
        key: "APP_AUTHOR",
        exact: true,
        component: <Author />,
    },
    {
        path: "playlists/rankings",
        key: "APP_PLAYLIST_RANKING",
        exact: true,
        component: <PlaylistRanking />,
    },
    {
        path: "channels",
        key: "APP_CHANNEL",
        exact: true,
        component: <Channel />,
    },
    {
        path: "channels/:id",
        key: "APP_CHANNEL_DETAIL",
        exact: true,
        component: <ChannelDetail />,
    },
    {
        path: "listenings",
        key: "APP_LISTENING",
        exact: true,
        component: <Listening />,
    }
]

export default ROUTES
