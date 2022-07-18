// import next
import Head from "next/head";

// import reduc
import { Provider } from "react-redux";
import store from "../../src/redux/store";

// import components
import Home from "../../src/pages/Home/Home";

// import service
import API from "../../src/services/api";
import { get } from "lodash";
import { SharedType } from "../../src/constants/shareType.constant";
import { APP_BASE_LINK } from "../../src/constants/link.constant";
import { getSharedLink } from "../../src/helper/link.helper";

const QrCodePage = ({ data }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

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
  const { type, id } = context.query;
  const { token } = context.req.cookies;
  const api = new API(token);
  
  let data = null;
  let res = null;
  let newUrl = "/";

  try {
    switch (type) {
      case SharedType.Playlist:
        res = await api.getPlaylistDetailByOldId(id);
        data = res.data.data;
        break;
      case SharedType.Audio:
        res = await api.getAudioDetailByOldId(id);
        data = res.data.data;
        break;
      case SharedType.Channel:
        res = await api.getChannelDetailByOldId(id);
        data = res.data.data;
        break;
    }
  } catch (err) {
    console.log(err.message);
  }

  const newId = get(data, "id", "");
  const slug = get(data, "slug", "");

  if (data && newId && slug) {
    let sharedType = SharedType.Playlist;
    switch (type) {
      case SharedType.Audio:
        sharedType = SharedType.Audio;
        break;
      case SharedType.Channel:
        sharedType = SharedType.Channel;
        break;
    }
    newUrl = getSharedLink(slug, sharedType, { withHost: false });
  }

  return {
    props: {
      data,
    },
    redirect: {
      destination: newUrl,
      permanent: false,
    },
  };
}

export default QrCodePage;
