// import next
import Head from "next/head";

// import reduc
import { Provider } from "react-redux";
import store from "../../src/redux/store";

// import components
import Home from "../../src/pages/Home/Home";
import PlaylistDetail from "../../src/components/PlaylistDetail/PlaylistDetail";
import ChannelDetail from "../../src/components/ChannelDetail/ChannelDetail";

// import service
import API from "../../src/services/api";
import { get, startsWith } from "lodash";
import {
  SharedType,
  SharedTypeInUrl,
} from "../../src/constants/shareType.constant";
import { APP_BASE_LINK } from "../../src/constants/link.constant";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getShareLinkToApp } from "../../src/helper/link.helper";
import { useState } from "react";

const SharedPage = ({ data, newUrl }) => {
  const router = useRouter();
  const url = typeof window !== "undefined" ? window.location.href : "";
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    if (!isRedirected) {
      document.location = newUrl;
      setIsRedirected(true)
    }    
  }, []);  

  useEffect(() => {
    if (isRedirected && startsWith(newUrl, APP_BASE_LINK)) {
      router.push('/', undefined, { shallow: true });
    }
  }, [isRedirected]);

  return data ? (
    <Provider store={store}>
      <Head>
        <title>{data?.name}</title>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data?.name} />
        <meta property="og:description" content={data?.description} />
        <meta property="og:image" content={data?.avatar?.original_url} />
        <meta property="og:image:url" content={data?.avatar?.original_url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Home />
    </Provider>
  ) : (
    ""
  );
};

export async function getServerSideProps(context) {
  const { t, slug } = context.query;
  const { token } = context.req.cookies;
  const api = new API(token);

  const userAgent = get(context.req.headers, "user-agent", "");
  const isMobile = !!userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  );
  let data = null;
  let res = null;
  let newUrl = isMobile ? APP_BASE_LINK : "/";

  try {
    switch (t) {
      case SharedType.Playlist:
        res = await api.getPlaylistDetailBySlug(slug);
        data = res.data.data;
        break;
      case SharedType.Audio:
        res = await api.getAudioDetailBySlug(slug);
        data = res.data.data;
        break;
      case SharedType.Channel:
        res = await api.getChannelDetailBySlug(slug);
        data = res.data.data;
        break;
    }
  } catch (err) {
    console.log(err.message);
  }

  const id = get(data, 'id', '');

  if (data && id) {
    switch (t) {
      case SharedType.Playlist:
        newUrl = isMobile
          ? getShareLinkToApp(SharedType.Playlist, id)
          : `/${SharedTypeInUrl.Playlist}/${id}`;
        break;
      case SharedType.Audio:
        newUrl = isMobile
          ? getShareLinkToApp(SharedType.Audio, id)
          : `/${SharedTypeInUrl.Playlist}/${get(data, 'playlist.id', '')}?audioId=${id}`;
        break;
      case SharedType.Channel:
        newUrl = isMobile
          ? getShareLinkToApp(SharedType.Channel, id)
          : `/${SharedTypeInUrl.Channel}/${id}`;
        break;
    }
  }

  return {
    props: {
      data,
      newUrl,
    },
  };
}

export default SharedPage;
