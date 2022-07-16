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
import {
  SearchTypeQuery,
  SharedType,
  SharedTypeInUrl,
} from "../../src/constants/shareType.constant";
import { APP_BASE_LINK } from "../../src/constants/link.constant";

const SharedPage = ({ data }) => {
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
  const { t, slug } = context.query;
  const { token } = context.req.cookies;
  const api = new API(token);

  const userAgent = get(context.req.headers, "user-agent", "");
  const isMobile = true || !!userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
  );
  let data = null;
  let audioId = "";
  let searchQueryType = SearchTypeQuery.Playlist;
  let newUrl = isMobile ? APP_BASE_LINK : "/";

  switch (t) {
    case SharedType.Audio:
      searchQueryType = SearchTypeQuery.Playlist;
      break;
    case SharedType.Channel:
      searchQueryType = SearchTypeQuery.Channel;
      break;
  }
  try {
    const res = await api.getSearchResults(searchQueryType, slug[0]);
    data = get(res.data, "data[0]");
  } catch (err) {
    console.log(err.message);
  }
  const id = get(data, "id", "");

  if (t === SharedType.Audio) {
    const res = await api.getPlaylistAudios(id, 0);
    audioId = get(res, "data.data[0].id", "");
  }

  if (data && id) {
    switch (t) {
      case SharedType.Playlist:
        newUrl = isMobile
          ? `${APP_BASE_LINK}share?type=${SharedType.Playlist}&id=${id}`
          : `/${SharedTypeInUrl.Playlist}/${id}`;
        break;
      case SharedType.Audio:
        newUrl = isMobile
          ? `${APP_BASE_LINK}share?type=${SharedType.Audio}&id=${audioId}`
          : `/${SharedTypeInUrl.Playlist}/${id}?audioId=${audioId}`;
        break;
      case SharedType.Channel:
        newUrl = isMobile
          ? `${APP_BASE_LINK}share?type=${SharedType.Channel}&id=${id}`
          : `/${SharedTypeInUrl.Channel}/${id}`;
        break;
    }
  }

  return {
    props: {
      data,
      test: newUrl,
    },
    redirect: {
      destination: newUrl,
      permanent: false,
    },
  };
}

export default SharedPage;
