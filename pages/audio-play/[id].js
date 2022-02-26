// import next
import Head from 'next/head';

// import redux
import { useDispatch } from 'react-redux';
import { setAudioHls } from '../../src/redux/playAudio';

// import components
import AudioPlay from '../../src/components/AudioPlay/AudioPlay';
// import service
import API from '../../src/services/api';
import { useEffect } from 'react';

const AudioPlayPage = ({ audio, audioHlsUrl }) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAudioHls(audioHlsUrl));
    }, []);

    return (
        <div>
            <Head>
                <title>{audio?.name}</title>
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={audio?.name} />
                <meta
                    property="og:description"
                    content={audio?.description}
                />
                <meta property="og:image" content={audio?.avatar?.original_url} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <AudioPlay audio={audio} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const api = new API();
    const { params } = context;

    async function fetchAudio() {
        const res = await api.getAudio(params.id);
        const audio = await res.data.data;
        return audio;
    }

    async function fetchAudioUrl() {
        const res = await api.getAudioFile(params.id);
        const data = await res.data.data;
        return data.url;
    }

    async function fetchAudioHls(url) {
        const res = await api.getAudioHls(url);
        const data = await res.data;
        return data;
    }

    const audio = await fetchAudio();
    const audioHlsUrl = await fetchAudioUrl();
    // const audioHls = await fetchAudioHls(audioHlsUrl);
    return {
        props: { audio, audioHlsUrl }
    }
}


export default AudioPlayPage