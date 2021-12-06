import Home from './pages/Home/Home';
import Account from './components/Account/Account';
import PlaylistDetail from './components/PlaylistDetail/PlaylistDetail';
import AudioPlay from './components/AudioPlay/AudioPlay';

const ROUTES = [
    {
        path: "/",
        key: "APP_ROOT",
        exact: true,
        component: Home,
    },
    {
        path: "/account",
        key: "APP_ACCOUNT",
        exact: true,
        component: Account,
    },
    {
        path: "/playlist-detail",
        key: "APP_PLAYLIST_DETAIL",
        exact: true,
        component: PlaylistDetail,
    },
    {
        path: "/audio-play",
        key: "APP_AUDIO_PLAY",
        exact: true,
        component: AudioPlay,
    }
]

export default ROUTES
