// import next
import Head from 'next/head';

import { Provider } from 'react-redux';

import Home from '../src/pages/Home/Home';

import store from '../src/redux/store';


function App() {
    return (
        <Provider store={store}>
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" sizes="16x16" href="/images/favicon-16x16.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Sách nói bán chạy. Đọc truyện đêm khuya. Tin tức hàng ngày. Podcast hữu ích. Cập nhật thường xuyên."
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />

                <link rel="manifest" href="/manifest.json" />

                <title>Sách nói & Podcast Chất lượng cao. 100% Bản quyền | Voiz FM</title>
                <meta property="og:url" content="https://voiz.vn" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sách nói & Podcast Chất lượng cao. 100% Bản quyền | Voiz FM" />
                <meta
                    property="og:description"
                    content="Sách nói bán chạy. Đọc truyện đêm khuya. Tin tức hàng ngày. Podcast hữu ích. Cập nhật thường xuyên."
                />
                <meta property="og:image" content="https://voiz.vn/images/logo_voiz.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Home />
        </Provider>
    )
}
export default App
