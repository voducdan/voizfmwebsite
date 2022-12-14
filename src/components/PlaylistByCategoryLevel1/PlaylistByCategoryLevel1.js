// import react
import { useEffect, useState } from "react";

import { withRouter } from "next/router";

// import next link
import Link from "next/link";

// import MUI components
import { Typography, Box, Divider, Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// import others components
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Thumbnail from "../Thumbnail/Thumbnail";
import CategoryBarWithoutSwiper from "../Shared/CategoryBarWithoutSwiper";
import PlaylistByCategory from "../Shared/PlaylistByCategory";
import PublisherComponent from "../Shared/PublisherComponent";

// import icons
import { RightArrow } from "../Icons/index";

// import utils
import {
  SCREEN_BREAKPOINTS,
  TEXT_STYLE,
  COLORS,
  DRAWER_WIDTH,
  FONT_FAMILY,
} from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";
import { flexStyle } from "../../utils/flexStyle";

// import service
import API from "../../services/api";
import { find, get, isEmpty, join } from "lodash";
import NavigationBar from "../NavigationBar";
import { getNavigationBarItemObject } from "../../helper/link.helper";
import FooterLongDescriptionAndCategoryList from "../HomeContent/FooterLongDescriptionAndCategoryList";
import { useSelector } from "react-redux";
import { getFooterCategoryList } from "../../redux/footerCategoryList";
import { getPlaylistImgWidth } from "../../helper/image.helper";

const Title = (props) => {
  const { isSm, content, haveArrow, marginBottom } = props;
  return (
    <Box
      sx={{
        ...flexStyle("flex-start", "center"),
        marginBottom: marginBottom ? marginBottom : "24px",
      }}
    >
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
          color: COLORS.white,
        }}
      >
        {content}
      </Typography>
      {haveArrow && (
        <Box sx={{ marginLeft: "11.3px", marginTop: "6px" }}>
          <RightArrow fill={COLORS.white} />
        </Box>
      )}
    </Box>
  );
};

const RandomPlayList = (props) => {
  const { data, isSm } = props;
  const { promotion } = data;
  const height = isSm ? "153px" : "200px";
  return (
    <Box
      sx={{
        ...flexStyle("center", "center"),
        bgcolor: COLORS.bg2,
        height: height,
        borderRadius: "4px",
        columnGap: isSm ? "11px" : "18px",
        p: "4px",
      }}
    >
      <Box
        sx={{
          position: "relative",
          borderRadius: "3px",
          width: height,
          height: height,
          ...(promotion && {
            "&::before": {
              content:
                promotion === "vip"
                  ? "url('/images/dvip.png')"
                  : promotion === "coin"
                  ? "url('/images/dcoin.png')"
                  : "url('/images/dfree.png')",
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 8,
            },
          }),
        }}
      >
        <img
          src={data?.avatar?.thumb_url}
          style={{
            width: height,
            height: height,
            borderRadius: "3px",
          }}
        />
      </Box>
      <Box
        sx={{
          width: `calc(100% - ${height})`,
          p: "20px 0",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.title1 : TEXT_STYLE.h3),
            color: COLORS.white,
            textAlign: "left",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: "6px",
          }}
        >
          {data.name}
        </Typography>
        <Box
          sx={{
            ...flexStyle("flex-start", "center"),
            columnGap: "6px",
            mb: "6px",
          }}
        >
          <AccountCircleOutlinedIcon
            sx={{
              color: COLORS.contentIcon,
              width: isSm ? "12px" : "16px",
              height: isSm ? "12px" : "16px",
            }}
          />
          <Typography
            sx={{
              ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.content1),
              color: COLORS.contentIcon,
            }}
          >
            {data.author_string}
          </Typography>
        </Box>
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.content3 : TEXT_STYLE.content2),
            color: COLORS.VZ_Text_content,
            textAlign: "left",
            display: "-webkit-box",
            textOverflow: "ellipsis",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

const NUM_PLAYLIST_RANDOM = 12;

function AudioBook({ router, pageTitle, isDisplayTitle = true }) {
  const api = new API();
  const pathname = router.pathname;
  const { subCategory } = router.query;
  const footerCategoryList = useSelector(getFooterCategoryList);

  const windowSize = useWindowSize();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
  const SPACE_BETWEEN = isSm ? 16 : 24;
  const NUMBER_ITEMS_PER_LINE = isSm ? 2.5 : 5;
  const SIDE_PADDING = isSm ? 19 : 48;

  const [categories, setCategories] = useState([]);
  const [categoryCode, setCategoryCode] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [playlistsRandom, setPlaylistsRandom] = useState([]);
  const [initPlaylists, setInitPlaylists] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(true);
  const [hasLoadMoreRandom, setHasLoadMoreRandom] = useState(true);

  useEffect(() => {
    const code = pathname.replace("-", "_").slice(1);
    async function fetchCategories() {
      const res = await api.getCategories(code);
      const data = await res.data.data;
      setCategories(data);
    }

    async function fetchPlaylistsRandom() {
      const res = await api.getCategoryPlaylists(
        code,
        NUM_PLAYLIST_RANDOM,
        [],
        "latest",
        1
      );
      const data = await res.data.data;
      setPlaylistsRandom(data);
    }
    if (!subCategory) {
      fetchPlaylistsRandom();
      fetchCategories();
    }
  }, [pathname]);

  useEffect(() => {
    async function initPlaylist() {
      // const initCategories = categories.filter(i => i.sub_name !== '');
      const initCategories = [...categories];
      const resultPromise = [];
      initCategories.forEach((i) => {
        const res = api.getCategoryPlaylists(i.code, 10);
        resultPromise.push(res);
      });
      const data = await Promise.all(resultPromise);
      const results = [];
      for (let i in data) {
        const value = data[i].data.data;
        if (value.length > 0) {
          results.push({
            name: initCategories[i]["sub_name"] || initCategories[i]["name"],
            data: value,
          });
        }
      }
      if (results.length > 1) {
        setInitPlaylists(results);
      }
    }

    if (!subCategory) {
      initPlaylist();
    }
  }, [categories]);

  useEffect(() => {
    async function fetchPlaylists() {
      const code = subCategory || categoryCode;
      if (code === null || code === "") {
        return;
      } else {
        try {
          const res = await api.getCategoryPlaylists(code, 10);
          const results = await res.data.data;
          if (isEmpty(results)) {
            setHasLoadMore(false);
          }
          setPlaylists(results);
        } catch (err) {
          console.log(err);
        }
      }
    }

    setHasLoadMore(true);
    fetchPlaylists();
  }, [categoryCode, subCategory]);

  useEffect(() => {
    if (subCategory) {
      getCategoryNameFromSubcategoryCode();
    }
  }, [subCategory, JSON.stringify(footerCategoryList)])
  

  const getInnerWidth = () => {
    const width = windowSize.width;
    let innerWidth = width - SIDE_PADDING * 2;
    if (!isSm) {
      innerWidth -= DRAWER_WIDTH;
    }
    return innerWidth;
  };

  const onSelectCategory = (categoryCode) => {
    if (categoryCode !== null && categoryCode !== "") {
      const category = categories.filter((i) => i.code === categoryCode)[0];
      const categoryName = !!category.sub_name
        ? category.sub_name
        : category.name;
      setCategoryName(categoryName);
    }
    setCategoryCode(categoryCode);
  };

  const handleLoadMoreRandomPlaylist = async () => {
    const code = pathname.replace("-", "_").slice(1);
    const ignore_ids = playlistsRandom.map((i) => i.id).join(",");
    const res = await api.getCategoryPlaylists(
      code,
      NUM_PLAYLIST_RANDOM,
      ignore_ids,
      "latest",
      1
    );
    const data = await res.data.data;
    if (isEmpty(data)) {
      setHasLoadMoreRandom(false);
    }
    setPlaylistsRandom([...playlistsRandom, ...data]);
  };

  const handleLoadMorePlaylist = async () => {
    try {
      const ignore_ids = join([...new Set(playlists.map((i) => i.id))], ",");
      const code = subCategory || categoryCode;
      const res = await api.getCategoryPlaylists(code, 10, ignore_ids);
      const results = await res.data.data;
      if (isEmpty(results)) {
        setHasLoadMore(false);
      }
      setPlaylists([...playlists, ...results]);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategoryNameFromSubcategoryCode = () => {
    if (subCategory) {
      const selectedCategoryInfo = find(
        footerCategoryList,
        (footerCateGoryItem) => footerCateGoryItem.name === pageTitle
      );
      const categoryNameFromSubcategoryCode = get(
        find(selectedCategoryInfo?.data || [], (d) => d.code === subCategory),
        "name",
        ""
      );
      setCategoryName(categoryNameFromSubcategoryCode);
    }
  };

  const audioBookHistories = [
    getNavigationBarItemObject("Trang ch???", "/"),
    getNavigationBarItemObject(`${pageTitle}`, `/${pathname}`),
  ];

  return (
    <Box
      sx={{
        pt: "10px",
        width: "100%",
      }}
    >
      {!!pageTitle && isDisplayTitle && (
        <Box>
          <Typography
            sx={{
              ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
              fontFamily: FONT_FAMILY,
              color: COLORS.white,
              p: `8px ${SIDE_PADDING}px 0`,
            }}
          >
            {pageTitle}
          </Typography>
          <NavigationBar
            histories={audioBookHistories}
            paddingX={SIDE_PADDING}
          />
        </Box>
      )}
      {/* <HomeCarousel windowWidth={windowSize.width} /> */}
      <Box
        sx={{
          p: `0 ${SIDE_PADDING}px`,
        }}
      >
        {categories.length >= 2 && !subCategory && (
          <CategoryBarWithoutSwiper
            categoryList={categories}
            isSm={isSm}
            windowWidth={getInnerWidth()}
            onSelectCategory={onSelectCategory}
          />
        )}
        {categories.length === 1 && initPlaylists.length === 0 && !subCategory && (
          <Box
            sx={{
              mt: "56px",
              mb: "34px",
            }}
          >
            <Typography
              sx={{
                ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
                color: COLORS.white,
                marginBottom: "8px",
              }}
            >
              {categories[0]?.name}
            </Typography>
            
            {!isDisplayTitle && (
              <NavigationBar histories={audioBookHistories} />
            )}
          </Box>
        )}
        {categories.length >= 2 && !subCategory && (
          <Divider sx={{ borderColor: COLORS.bg2, mt: "24px" }} />
        )}
        {(categoryCode === null || categoryCode === "") &&
          !subCategory &&
          initPlaylists.length > 0 && (
            <Box
              sx={{
                mt: "48px",
              }}
            >
              {initPlaylists.map((i) => (
                <PlaylistByCategory
                  key={i.name}
                  i={i}
                  isSm={isSm}
                  playlistImgWidth={getPlaylistImgWidth(
                    windowSize,
                    NUMBER_ITEMS_PER_LINE,
                    SPACE_BETWEEN,
                    DRAWER_WIDTH,
                    SIDE_PADDING
                  )}
                />
              ))}
            </Box>
          )}
        {((categoryCode !== null && categoryCode !== "") ||
          !isEmpty(subCategory)) && (
          <Box>
            <Box
              sx={{
                mt: "48px",
              }}
            >
              {
                <Title
                  content={categoryName}
                  isSm={isSm}
                  haveArrow={false}
                  marginBottom="8px"
                />
              }

              {!isDisplayTitle && (
                <NavigationBar histories={audioBookHistories} />
              )}
              <Box
                sx={{
                  ...flexStyle("flex-start", "center"),
                  columnGap: `${SPACE_BETWEEN}px`,
                  mb: "56px",
                  flexWrap: "wrap",
                  rowGap: isSm ? "16px" : "32px",
                }}
              >
                {playlists.map((item) => (
                  <Link key={item.id} href={`/play/${item.id}`}>
                    <a
                      style={{ width: `calc(100% / ${isSm ? 2 : 5} - 19.2px)` }}
                    >
                      <Thumbnail
                        style={{
                          width: "100%",
                          height: `${getPlaylistImgWidth(
                            windowSize,
                            NUMBER_ITEMS_PER_LINE,
                            SPACE_BETWEEN,
                            DRAWER_WIDTH,
                            SIDE_PADDING
                          )}px`,
                          borderRadius: 3,
                        }}
                        avtSrc={item.avatar.thumb_url}
                        alt={`images ${item.name}`}
                        promotion={item?.promotion || ""}
                      />
                    </a>
                  </Link>
                ))}
              </Box>
              {hasLoadMore && (
                <Box
                  sx={{
                    mt: "26px",
                    mb: "80px",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: COLORS.white,
                      ...TEXT_STYLE.title1,
                      borderRadius: "8px",
                      height: "48px",
                      width: "142px",
                      border: `1px solid ${COLORS.blackStroker}`,
                    }}
                    onClick={handleLoadMorePlaylist}
                  >
                    Xem th??m
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
      {!["/children-book", "/summary-book"].includes(pathname) &&
        categoryCode === null &&
        isEmpty(subCategory) && (
          <Box
            sx={{
              width: "100%",
            }}
          >
            <img
              src="https://picsum.photos/1190/420?img=2"
              style={{ width: "100%", height: "260px" }}
            />
          </Box>
        )}
      {categoryCode === null && isEmpty(subCategory) && (
        <Box
          sx={{
            p: `0 ${SIDE_PADDING}px`,
            mt: !["/children-book", "/summary-book"].includes(pathname)
              ? "58px"
              : 0,
            ...flexStyle("flex-start", "center"),
            rowGap: isSm ? "20px" : "22px",
            flexWrap: "wrap",
            ...(!isSm && { columnGap: "28px" }),
          }}
        >
          {playlistsRandom.map((i) => (
            <Link href={`/play/${i?.id}`} key={i?.id}>
              <a
                className={
                  isSm
                    ? "random-playlist-link-mb"
                    : "random-playlist-link-desktop"
                }
              >
                <RandomPlayList data={i} isSm={isSm} />
              </a>
            </Link>
          ))}
          {hasLoadMoreRandom && (
            <Box
              sx={{
                mt: "26px",
                mb: "80px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Button
                onClick={handleLoadMoreRandomPlaylist}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: COLORS.white,
                  ...TEXT_STYLE.title1,
                  borderRadius: "8px",
                  height: "48px",
                  width: "142px",
                  border: `1px solid ${COLORS.blackStroker}`,
                }}
              >
                Xem th??m
              </Button>
            </Box>
          )}
        </Box>
      )}
      <PublisherComponent isSm={isSm} />
      <FooterLongDescriptionAndCategoryList isSm={isSm} pageTitle={pageTitle} />
    </Box>
  );
}

export default withRouter(AudioBook);
