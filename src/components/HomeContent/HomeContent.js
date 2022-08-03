// import react
import { useRef, useState, useEffect } from "react";

// import next link
import Link from "next/link";

// import MUI components
import { styled } from "@mui/material/styles";
import { Typography, Box, Button, Avatar } from "@mui/material";

// import swiper
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import {
  Swiper,
  SwiperSlide,
} from "../../../node_modules/swiper/react/swiper-react.js";

// import others components
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import CategoryBar from "../../components/Shared/CategoryBar";
import PublisherComponent from "../../components/Shared/PublisherComponent";

// import icons
import {
  RightArrow,
  CarouselPrev,
  CarouselNext,
} from "../../components/Icons/index";

// import utils
import {
  SCREEN_BREAKPOINTS,
  TEXT_STYLE,
  FONT_FAMILY,
  COLORS,
  DRAWER_WIDTH,
  FONT_COLOR,
} from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";
import { flexStyle } from "../../utils/flexStyle";

// import services
import API from "../../services/api";

import {
  CATEGORIES_LEVEL1,
  CATEGORIES_LEVEL2,
} from "../../constants/categories.constant.js";
import FooterLongDescriptionAndCategoryList from "./FooterLongDescriptionAndCategoryList/index.js";
import {
  getFeaturedAuthorWidth,
  getPlaylistImgWidth,
} from "../../helper/image.helper.js";
import { LIMIT_PER_PAGE } from "../../constants/apiParam.constant.js";
import { isEmpty } from "lodash";
import ReactShowMoreText from "react-show-more-text";
import { PageTitles } from "../../constants/pageTitle.constant.js";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const SwiperBtnNext = () => {
  return {
    position: "absolute",
    right: 0,
    width: "24px",
    height: "24px",
    top: "50%",
    transform: "translate(-40px, 70%)",
    zIndex: 2,
    cursor: "pointer",
  };
};

const SwiperBtnPrev = () => {
  return {
    position: "absolute",
    left: 0,
    width: "24px",
    height: "24px",
    top: "50%",
    transform: "translate(28px, 70%)",
    zIndex: 2,
    cursor: "pointer",
  };
};

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  () => ({})
);

const Title = (props) => {
  const { isSm, content } = props;
  return (
    <Box
      sx={{
        ...flexStyle("flex-start", "center"),
        marginBottom: "24px",
      }}
    >
      <Typography
        sx={{
          ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
          fontFamily: FONT_FAMILY,
          color: COLORS.white,
        }}
      >
        {content}
      </Typography>
      <Box sx={{ marginLeft: "11.3px", marginTop: "6px" }}>
        <RightArrow fill={COLORS.white} />
      </Box>
    </Box>
  );
};

const CustomPaginationBullet = ({
  numOfBullets,
  activePaginationBullet,
  handleClickPaginationBullet,
}) => {
  const ids = Array.from(Array(numOfBullets).keys());
  return (
    <Box
      sx={{
        position: "absolute",
        top: "32px",
        right: "48px",
        ...flexStyle("center", "center"),
        columnGap: "16px",
      }}
    >
      {ids.map((idx) => (
        <Box
          key={idx}
          onClick={handleClickPaginationBullet}
          id={idx}
          sx={{
            width: "14px",
            height: "14px",
            bgcolor:
              activePaginationBullet === idx
                ? COLORS.second
                : COLORS.placeHolder,
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></Box>
      ))}
    </Box>
  );
};

export default function HomeContent() {
  const api = new API();

  const windowSize = useWindowSize();
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;

  const [randomPlaylists, setRandomPlaylists] = useState([]);
  const [playlistsByCategory, setPlaylistsByCategory] = useState([]);
  const [playlistsByCategoryLevel2, setPlaylistsByCategoryLevel2] = useState(
    []
  );
  const [newContents, setNewContents] = useState([]);
  const [activeNewContentPagination, setActiveNewContentPagination] =
    useState(0);
  const [showNewContentNavigationBtn, setShowNewContentNavigationBtn] =
    useState(false);
  const [featuredAuthors, setFeaturedAuthors] = useState([]);

  const navigationNewContentPrevRef = useRef(null);
  const navigationNewContentNextRef = useRef(null);

  const NUMBER_ITEMS_PER_LINE = !isSm ? 5 : 2.5;
  const SPACE_BETWEEN = isSm ? 8 : 20;
  const SIDE_PADDING = isSm ? 20 : 48;

  const swiperPagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span id="new-content-pagination-${index}" class="${className}" style="visibility:hidden">${
        index + 2
      }</span>`;
    },
  };

  useEffect(() => {
    async function fetchRandomPlaylists() {
      const res = await api.getPlaylistsRandom();
      const data = await res.data.data;
      setRandomPlaylists(data);
    }

    async function fetchNewContent() {
      const res = await api.getHomeNewContent();
      const data = await res.data.data;
      setNewContents(data);
    }

    async function fetchCategoryLevel1Playlists() {
      let playlists = [];
      for (let category of CATEGORIES_LEVEL1) {
        let playlistsByOneCategory = {
          code: category.code,
          name: category.name,
        };
        const resPlaylist = api.getCategoryPlaylists(category.code);
        const resCategoryLevel2 = api.getCategories(category.code);
        const res = await Promise.all([resPlaylist, resCategoryLevel2]);
        playlistsByOneCategory["data"] = await res[0].data.data;
        playlistsByOneCategory["categories"] = await res[1].data.data;
        playlists.push(playlistsByOneCategory);
      }
      setPlaylistsByCategory(playlists);
    }

    async function fetchCategoryLevel2Playlists() {
      let playlists = [];
      for (let category of CATEGORIES_LEVEL2) {
        let playlistsByOneCategory = {
          code: category.code,
          name: category.name,
        };
        const res = await api.getCategoryPlaylists(category.code);
        const data = await res.data.data;
        playlistsByOneCategory["data"] = data;
        playlists.push(playlistsByOneCategory);
      }
      setPlaylistsByCategoryLevel2(playlists);
    }

    async function fetchFeaturedAuthors() {
      const res = await api.getFeaturedAuthors(1, LIMIT_PER_PAGE);
      setFeaturedAuthors(res.data.data);
    }

    fetchNewContent();
    fetchCategoryLevel1Playlists();
    fetchCategoryLevel2Playlists();
    fetchRandomPlaylists();
    fetchFeaturedAuthors();
  }, []);

  const onSelectCategory = async (parent, code) => {
    const tmpPlaylists = playlistsByCategory;
    const parentIdx = playlistsByCategory.findIndex((i) => i.code === parent);
    const res = await api.getCategoryPlaylists(code);
    const data = await res.data.data;
    tmpPlaylists[parentIdx]["data"] = data;
    setPlaylistsByCategory([...tmpPlaylists]);
  };

  const handleClickNewContentPaginationBullet = (e) => {
    const id = Number(e.target.id);
    const actualPaginationBullet = document.querySelector(
      `#new-content-pagination-${id}`
    );
    actualPaginationBullet.click();
    setActiveNewContentPagination(id);
  };

  const handleSlideChange = (e) => {
    const realIndex = e.realIndex;
    const id = Math.ceil(realIndex / 3);
    setActiveNewContentPagination(id);
  };

  return (
    <Main className="home-page">
      <Box
        sx={{
          ...flexStyle("flex-start", "center"),
          padding: isSm ? "15px" : "35px 47px",
        }}
      >
        <Box>
          <img
            style={{
              width: isSm ? "65px" : "95px",
              width: "56px",
              height: "56px",
              marginRight: "24px",
              borderRadius: "6px",
            }}
            alt={"pp"}
            src={"/images/ic_book.svg"}
          />
        </Box>
        <Box>
          <Typography
            sx={{
              ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h1),
              fontFamily: FONT_FAMILY,
              color: COLORS.white,
            }}
          >
            Kho sách nói online bản quyền
          </Typography>
          <Typography
            sx={{
              ...(isSm ? TEXT_STYLE.content3 : TEXT_STYLE.content2),
              fontFamily: FONT_FAMILY,
              color: FONT_COLOR,
            }}
          >
            Nghe những tựa sách nói hay bán chạy nhất từ các tác giả nổi tiếng
            tại Việt Nam và trên Thế Giới
          </Typography>
        </Box>
      </Box>
      {/* <HomeCarousel></HomeCarousel> */}
      <Box
        sx={{
          pt: isSm ? "10px" : "40px",
          m: isSm ? "20px" : "56px 48px",
        }}
      >
        {<Title content="Gợi ý cho người chưa bắt đầu" isSm={isSm} />}
        <Swiper
          slidesPerView={NUMBER_ITEMS_PER_LINE}
          spaceBetween={SPACE_BETWEEN}
          style={{
            marginTop: 35,
            height: `${getPlaylistImgWidth(
              windowSize,
              NUMBER_ITEMS_PER_LINE,
              SPACE_BETWEEN,
              DRAWER_WIDTH,
              SIDE_PADDING
            )}px`,
            minHeight: isSm ? "180px" : "275px",
          }}
        >
          {randomPlaylists.map((item) => (
            <SwiperSlide key={item?.id}>
              <Link href={`/play/${item?.id}`}>
                <Box sx={{ cursor: "pointer" }}>
                  <Thumbnail
                    style={{
                      width: "100%",
                      borderRadius: "4px 4px 0 0",
                      height: `${getPlaylistImgWidth(
                        windowSize,
                        NUMBER_ITEMS_PER_LINE,
                        SPACE_BETWEEN,
                        DRAWER_WIDTH,
                        SIDE_PADDING
                      )}px`,
                    }}
                    avtSrc={item?.avatar?.thumb_url}
                    alt={`images ${item?.id}`}
                    promotion={item?.promotion || ""}
                    name={item?.name || ""}
                  />
                  <Typography
                    sx={{
                      ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.h3),
                      fontFamily: FONT_FAMILY,
                      color: COLORS.white,
                      height: "18px",
                      width: "auto",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "16px",
                      backgroundColor: "#000000",
                      marginTop: "-5px",
                      backgroundColor: COLORS.bg2,
                      borderRadius: "0 0 4px 4px",
                    }}
                  >
                    {item?.name || ""}
                  </Typography>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {playlistsByCategory.map((data) => (
        <Box
          sx={{
            margin: isSm
              ? `0 ${SIDE_PADDING}px 40px ${SIDE_PADDING}px`
              : `0 ${SIDE_PADDING}px 56px ${SIDE_PADDING}px`,
          }}
          key={data.code}
        >
          {<Title content={data.name} isSm={isSm} />}
          {data?.categories && data?.categories.length >= 2 && (
            <CategoryBar
              categoryList={data.categories}
              isSm={isSm}
              active={0}
              onSelectCategory={onSelectCategory}
              parent={data.code}
              hasNavigation={true}
            />
          )}
          <Swiper
            slidesPerView={NUMBER_ITEMS_PER_LINE}
            spaceBetween={SPACE_BETWEEN}
            style={{
              marginTop: !isSm ? 35 : 20,
              height: `${getPlaylistImgWidth(
                windowSize,
                NUMBER_ITEMS_PER_LINE,
                SPACE_BETWEEN,
                DRAWER_WIDTH,
                SIDE_PADDING
              )}px`,
              minHeight: isSm ? "180px" : "275px",
            }}
          >
            {data.data.map((item) => (
              <SwiperSlide key={item?.id}>
                <Link href={`/play/${item?.id}`}>
                  <Box sx={{ cursor: "pointer" }}>
                    <Thumbnail
                      style={{
                        width: "100%",
                        borderRadius: "4px 4px 0 0",
                        height: `${getPlaylistImgWidth(
                          windowSize,
                          NUMBER_ITEMS_PER_LINE,
                          SPACE_BETWEEN,
                          DRAWER_WIDTH,
                          SIDE_PADDING
                        )}px`,
                      }}
                      avtSrc={item?.avatar?.thumb_url}
                      alt={`images ${item?.id}`}
                      promotion={item?.promotion || ""}
                      name={item?.name || ""}
                    />
                    <Typography
                      sx={{
                        ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.h3),
                        fontFamily: FONT_FAMILY,
                        color: COLORS.white,
                        height: "18px",
                        width: "auto",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        padding: "16px",
                        backgroundColor: "#000000",
                        marginTop: "-5px",
                        backgroundColor: COLORS.bg2,
                        borderRadius: "0 0 4px 4px",
                      }}
                    >
                      {item?.name || ""}
                    </Typography>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ))}
      <Box
        onMouseOver={() => {
          setShowNewContentNavigationBtn(true);
        }}
        onMouseOut={() => {
          setShowNewContentNavigationBtn(false);
        }}
        sx={{
          p: isSm ? "32px 20px 23px 20px" : "32px 48px 23px 48px",
          backgroundColor: COLORS.bg2,
          position: "relative",
          marginBottom: "48px",
        }}
      >
        <CustomPaginationBullet
          numOfBullets={3}
          activePaginationBullet={activeNewContentPagination}
          handleClickPaginationBullet={handleClickNewContentPaginationBullet}
        />
        {<Title content="Nội dung mới cho bạn" isSm={isSm} />}
        <Swiper
          onSlideChange={handleSlideChange}
          pagination={swiperPagination}
          navigation={{
            prevEl: navigationNewContentPrevRef.current,
            nextEl: navigationNewContentNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl =
              navigationNewContentPrevRef.current;
            swiper.params.navigation.nextEl =
              navigationNewContentNextRef.current;
          }}
          slidesPerView={NUMBER_ITEMS_PER_LINE}
          spaceBetween={SPACE_BETWEEN}
          slidesPerGroup={3}
          style={{
            height: `${getPlaylistImgWidth(
              windowSize,
              NUMBER_ITEMS_PER_LINE,
              SPACE_BETWEEN,
              DRAWER_WIDTH,
              SIDE_PADDING
            )}px`,
          }}
        >
          {newContents.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href={`/play/${item?.id}`}>
                <Box sx={{ cursor: "pointer" }}>
                  <Thumbnail
                    style={{
                      width: "100%",
                      borderRadius: "4px",
                      height: `${getPlaylistImgWidth(
                        windowSize,
                        NUMBER_ITEMS_PER_LINE,
                        SPACE_BETWEEN,
                        DRAWER_WIDTH,
                        SIDE_PADDING
                      )}px`,
                    }}
                    avtSrc={item?.avatar?.thumb_url}
                    alt={`images ${item?.id}`}
                    promotion={item?.promotion || ""}
                    name={item?.name || ""}
                  />
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          style={{
            ...SwiperBtnPrev(),
            ...((isSm || !showNewContentNavigationBtn) && {
              display: "none",
            }),
          }}
          ref={navigationNewContentPrevRef}
        >
          <CarouselPrev></CarouselPrev>
        </div>
        <div
          style={{
            ...SwiperBtnNext(),
            ...((isSm || !showNewContentNavigationBtn) && {
              display: "none",
            }),
          }}
          ref={navigationNewContentNextRef}
        >
          {" "}
          <CarouselNext></CarouselNext>
        </div>
      </Box>

      <Box
        sx={{
          margin: `0 ${SIDE_PADDING}px 40px ${SIDE_PADDING}px`,
        }}
        key={"author"}
      >
        <Typography
          sx={{
            ...(isSm ? TEXT_STYLE.h3 : TEXT_STYLE.h2),
            color: COLORS.white,
            marginBottom: "32px",
          }}
        >
          Tác giả nổi bật
        </Typography>
        <Swiper
          id="author-detail-info"
          className="author-detail-info-swiper"
          slidesPerView={NUMBER_ITEMS_PER_LINE}
          spaceBetween={SPACE_BETWEEN}
          style={{
            height: `${getPlaylistImgWidth(
              windowSize,
              NUMBER_ITEMS_PER_LINE,
              SPACE_BETWEEN,
              DRAWER_WIDTH,
              SIDE_PADDING
            )}px`,
            minHeight: isSm ? "180px" : "275px",
          }}
        >
          {featuredAuthors.map((i) => (
            <SwiperSlide key={i?.id} style={{ width: "100%" }}>
              <Link href={`/play/${i?.id}`}>
                <Box
                  key={i?.id}
                  sx={{
                    width: `200px`,
                    minWidth: "100px",
                  }}
                >
                  <Link
                    href={`/authors/${i?.id}`}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Box
                      sx={{
                        ...flexStyle("center", "center"),
                        flexDirection: "column",
                        rowGap: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <Avatar
                        style={{
                          width: "150px",
                          height: "150px",
                          minHeight: "100px",
                          border: `2px solid ${COLORS.second}`,
                        }}
                        src={i?.avatar?.thumb_url}
                        alt={`image ${i?.name}`}
                      />
                      <Box
                        sx={{
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        <Typography
                          sx={{
                            ...TEXT_STYLE.title1,
                            color: COLORS.white,
                            marginTop: "24px",
                            marginBottom: "8px",
                          }}
                        >
                          {i?.name || ""}
                        </Typography>

                        <ReactShowMoreText
                          lines={2}
                          more={undefined}
                          less={undefined}
                          className="truncated-text-content3"
                          anchorClass="my-anchor-css-class my-anchor-css-class-hidden"
                          expanded={false}
                          truncatedEndingComponent={"..."}
                        >
                          <Typography
                            sx={{
                              ...TEXT_STYLE.content3,
                              color: COLORS.VZ_Text_content,
                              maxWidth: "90%",
                            }}
                          >
                            {i?.description || ""}
                          </Typography>
                        </ReactShowMoreText>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {playlistsByCategoryLevel2.map((data) => (
        <Box
          sx={{
            margin: isSm
              ? `0 ${SIDE_PADDING}px 40px ${SIDE_PADDING}px`
              : `0 ${SIDE_PADDING}px 56px ${SIDE_PADDING}px`,
          }}
          key={data.code}
        >
          {<Title content={data.name} isSm={isSm} />}
          <Swiper
            slidesPerView={NUMBER_ITEMS_PER_LINE}
            spaceBetween={SPACE_BETWEEN}
            style={{
              marginTop: !isSm ? 35 : 20,
              height: `${getPlaylistImgWidth(
                windowSize,
                NUMBER_ITEMS_PER_LINE,
                SPACE_BETWEEN,
                DRAWER_WIDTH,
                SIDE_PADDING
              )}px`,
              minHeight: isSm ? "180px" : "275px",
            }}
          >
            {data.data.map((item) => (
              <SwiperSlide key={item?.id}>
                <Link href={`/play/${item?.id}`}>
                  <Box sx={{ cursor: "pointer" }}>
                    <Thumbnail
                      style={{
                        width: "100%",
                        borderRadius: "6px 6px 0 0",
                        height: `${getPlaylistImgWidth(
                          windowSize,
                          NUMBER_ITEMS_PER_LINE,
                          SPACE_BETWEEN,
                          DRAWER_WIDTH,
                          SIDE_PADDING
                        )}px`,
                      }}
                      avtSrc={item?.avatar?.thumb_url}
                      alt={`images ${item?.id}`}
                      promotion={item?.promotion || ""}
                      name={item?.name || ""}
                    />
                    <Typography
                      sx={{
                        ...(isSm ? TEXT_STYLE.content2 : TEXT_STYLE.h3),
                        fontFamily: FONT_FAMILY,
                        color: COLORS.white,
                        height: "18px",
                        width: "auto",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        padding: "16px",
                        backgroundColor: "#000000",
                        marginTop: "-5px",
                        backgroundColor: COLORS.bg2,
                        borderRadius: "0 0 6px 6px",
                      }}
                    >
                      {item?.name || ""}
                    </Typography>
                  </Box>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      ))}
      <PublisherComponent isSm={isSm} />
      <FooterLongDescriptionAndCategoryList isSm={isSm} pageTitle={PageTitles.HOME} />
    </Main>
  );
}
