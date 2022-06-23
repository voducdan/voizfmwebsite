// import next

import { Provider } from 'react-redux';

import Home from '../src/pages/Home/Home';

import store from '../src/redux/store';


function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
export default App
