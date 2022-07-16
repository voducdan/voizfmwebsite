// import next
import Head from "next/head";

// import reduc
import { Provider } from "react-redux";
import store from "../../src/redux/store";

// import components
import Home from '../../src/pages/Home/Home';

// import service
import API from "../../src/services/api";
import { get } from "lodash";
import { SearchTypeQuery, SharedType, SharedTypeInUrl } from "../../src/constants/shareType.constant";

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
  let data = null;
  let audioId = '';
  let searchQueryType = SearchTypeQuery.Playlist;
  
  switch (t) {
    case SharedType.Audio:
      searchQueryType = SearchTypeQuery.Playlist;
      break;
    case SharedType.Channel:
      searchQueryType = SearchTypeQuery.Channel;
      break;
  }
  try {
    const res = await api.getSearchResults(searchQueryType, slug);
    data = get(res.data, 'data[0]');
  } catch (err) {
    console.log(err.message);
  }
  const id = get(data, 'id', '')


  if (t === SharedType.Audio) {
    const res = await api.getPlaylistAudios(id, 0);
    audioId = get(res, 'data.data[0].id', '');
  }
  let newUrl = '/';

  if (data && id) {
    let sharedTypeParamString = ''
    switch (t) {
      case SharedType.Playlist:
        newUrl = `/${SharedTypeInUrl.Playlist}/${id}`
        break;
      case SharedType.Audio:
        newUrl = `/${SharedTypeInUrl.Playlist}/${id}?audioId=${audioId}`
        break;
      case SharedType.Channel:
        newUrl = `/${SharedTypeInUrl.Channel}/${id}`
        break;
    }
  }
  return {
    redirect: {
      destination: newUrl,
      permanent: false,
    },
  };
}

export default SharedPage;
