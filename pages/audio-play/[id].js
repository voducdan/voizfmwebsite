// import next
import Head from 'next/head';

// import redux
import { useSelector } from 'react-redux';
import { selectUrl } from '../../src/redux/playAudio';

import { videojs } from 'videojs-contrib-hls';

// import components
import AudioPlay from '../../src/components/AudioPlay/AudioPlay';

// import service
import API from '../../src/services/api';
import { useEffect } from 'react';

const AudioPlayPage = ({ audio, fetchedUrl }) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    useEffect(() => {
        const player = videojs('alo');
        player.play();
    }, [])
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
            <video id='alo' width='960' height='540' className="video-js vjs-default-skin" controls>
                <source src={fetchedUrl} type="application/x-mpegURL"></source>
            </video>
        </div>
    )
}

export async function getServerSideProps(context) {
    const api = new API();
    const { params } = context;

    async function fetchAudioHls() {
        const fetchedUrl = await fetchAudioUrl();
        const res = await api.getAudioHls(fetchedUrl);
        const data = await res.data;
        console.log(res)
    }

    async function fetchAudioUrl() {
        const res = await api.getAudioFile(params.id);
        const data = await res.data;
        const fetchedUrl = data.data.url;
        return fetchedUrl;
    }

    async function fetchAudio() {
        const res = await api.getAudio(params.id);
        const audio = await res.data.data;
        return audio;
    }

    const audio = await fetchAudio();
    // const hls = await fetchAudioHls();
    const fetchedUrl = await fetchAudioUrl();
    return {
        props: { audio, fetchedUrl }
    }
}


export default AudioPlayPage