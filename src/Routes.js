
import Home from './pages/Home/Home'
import Account from './components/Account/Account'

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
    }
]

export default ROUTES
