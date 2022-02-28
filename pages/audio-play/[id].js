// import next
import Head from 'next/head';

import { useRouter } from 'next/router';

// import redux
import { useDispatch } from 'react-redux';
import { setAudioHls } from '../../src/redux/playAudio';
import { setAudioData } from '../../src/redux/audio';

// import components
import AudioPlay from '../../src/components/AudioPlay/AudioPlay';
// import service
import API from '../../src/services/api';
import { useEffect } from 'react';

const AudioPlayPage = ({ audio, audioHlsUrl }) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const location = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAudioHls(audioHlsUrl));
        dispatch(setAudioData(audio));
    }, [location.asPath]);

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

    const audio = await fetchAudio();
    const audioHlsUrl = await fetchAudioUrl();
    return {
        props: { audio, audioHlsUrl }
    }
}


export default AudioPlayPage