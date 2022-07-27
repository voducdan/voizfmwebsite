import React from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import { COLORS, FONT_COLOR, TEXT_STYLE } from "../../../utils/constants";
import { map, get } from "lodash";
import ShowMoreText from "react-show-more-text";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { flexStyle } from "../../../utils/flexStyle";
import { useSelector } from "react-redux";
import { getFooterCategoryList } from "../../../redux/footerCategoryList";

const LONG_DESCRIPTION_TITLE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const LONG_DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ShowMoreTextBtn = (content) => (
  <Button
    endIcon={content === "Xem thêm" ? <ExpandMoreIcon /> : <ExpandLessIcon />}
    sx={{
      color: COLORS.second,
      ...TEXT_STYLE.VZ_Caption_2,
      textTransform: "none",
      ...flexStyle("center", "center"),
      width: "100%",
    }}
  >
    {content}
  </Button>
);

const CategoryTextLink = ({ text, url }) => (
  <Link
    href={url}
    sx={{
      ...TEXT_STYLE.content2,
      color: FONT_COLOR,
      marginBottom: "24px",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    }}
  >
    {text}
  </Link>
);

const FooterCategoryList = ({ isSm }) => {
  const footerCategoryList = useSelector(getFooterCategoryList);
  const { podcast, audio_book, story_book, summary_book, children_book } =
    footerCategoryList;

  return (
    <Box sx={{ paddingTop: "56px" }}>
      <Typography
        sx={{
          ...TEXT_STYLE.h2,
          color: COLORS.white,
        }}
      >
        Danh Mục
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: isSm ? "100%" : "256px", marginTop: "16px" }}>
          <Typography
            sx={{
              ...TEXT_STYLE.h3,
              color: COLORS.white,
              marginBottom: "8px",
            }}
          >
            {audio_book.name}
          </Typography>
          {map(audio_book.data, (audioBook) => (
            <span>
              <CategoryTextLink
                url={`/audio-book?subCategory=${get(audioBook, "code", "")}`}
                text={get(audioBook, "name", "")}
              />
              <span className="Footer-link-separate"> | </span>
            </span>
          ))}
        </Box>
        <Box sx={{ width: isSm ? "100%" : "256px", marginTop: "16px" }}>
          <Typography
            sx={{
              ...TEXT_STYLE.h3,
              color: COLORS.white,
              marginBottom: "8px",
            }}
          >
            {story_book.name}
          </Typography>
          {map(story_book.data, (storyBook) => (
            <span>
              <CategoryTextLink
                url={`/story-book?subCategory=${get(storyBook, "code", "")}`}
                text={get(storyBook, "name", "")}
              />
              <span className="Footer-link-separate"> | </span>
            </span>
          ))}

          <Typography
            sx={{
              ...TEXT_STYLE.h3,
              color: COLORS.white,
              marginBottom: "8px",
              marginTop: "16px",
            }}
          >
            {podcast.name}
          </Typography>
          {map(podcast.data, (podcastItem) => (
            <span>
              <CategoryTextLink
                url={`/podcast?subCategory=${get(podcastItem, "code", "")}`}
                text={get(podcastItem, "name", "")}
              />
              <span className="Footer-link-separate"> | </span>
            </span>
          ))}
        </Box>
        <Box sx={{ width: isSm ? "100%" : "256px", marginTop: "16px" }}>
          <Typography
            sx={{
              ...TEXT_STYLE.h3,
              color: COLORS.white,
              marginBottom: "8px",
            }}
          >
            {summary_book.name}
          </Typography>
          {map(summary_book.data, (summaryBook) => (
            <span>
              <CategoryTextLink
                url={`/summary-book?subCategory=${get(
                  summaryBook,
                  "code",
                  ""
                )}`}
                text={get(summaryBook, "name", "")}
              />
              <span className="Footer-link-separate"> | </span>
            </span>
          ))}
        </Box>
        <Box sx={{ width: isSm ? "100%" : "256px", marginTop: "16px" }}>
          <Typography
            sx={{
              ...TEXT_STYLE.h3,
              color: COLORS.white,
              marginBottom: "8px",
            }}
          >
            {children_book.name}
          </Typography>
          {map(children_book.data, (childrenBook) => (
            <span>
              <CategoryTextLink
                url={`/children-book?subCategory=${get(
                  childrenBook,
                  "code",
                  ""
                )}`}
                text={get(childrenBook, "name", "")}
              />
              <span className="Footer-link-separate"> | </span>
            </span>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const FooterLongDescriptionAndCategoryList = ({ isSm }) => {
  return (
    <Box
      sx={{
        padding: (isSm ? "56px 15px" : "56px 47px"),
        borderBottom: "1px solid #292B32",
      }}
    >
      <Typography
        sx={{
          ...TEXT_STYLE.h2,
          color: COLORS.white,
          marginBottom: "24px",
        }}
      >
        {LONG_DESCRIPTION_TITLE}
      </Typography>

      <Box
        sx={{
          padding: "32px",
          backgroundColor: "#292B32",
          borderRadius: "6px",
        }}
      >
        <ShowMoreText
          lines={6}
          more={ShowMoreTextBtn("Xem thêm")}
          less={ShowMoreTextBtn("Thu gọn")}
          className="truncated-text"
          anchorClass="my-anchor-css-class"
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          <Typography
            sx={{
              ...TEXT_STYLE.content2,
              color: COLORS.VZ_Text_content,
              marginBottom: "16px",
              maxWidth: "90%",
            }}
          >
            {LONG_DESCRIPTION}
          </Typography>
        </ShowMoreText>
      </Box>

      <FooterCategoryList isSm={isSm} />
    </Box>
  );
};

export default FooterLongDescriptionAndCategoryList;
