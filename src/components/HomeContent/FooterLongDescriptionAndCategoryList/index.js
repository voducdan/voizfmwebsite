import React from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import { COLORS, FONT_COLOR, TEXT_STYLE } from "../../../utils/constants";
import { map, get, isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { getFooterCategoryList } from "../../../redux/footerCategoryList";
import { LongDescription } from "../../../constants/longDescription.constant";
import { PageTitles } from "../../../constants/pageTitle.constant";
import ReadMore from "../../ReadMore";
import ChevronDownIcon from "../../Icons/ChevronDownIcon";

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

  const isDisplayCategories = !(
    isEmpty(podcast.data) ||
    isEmpty(audio_book.data) ||
    isEmpty(story_book.data) ||
    isEmpty(summary_book.data) ||
    isEmpty(children_book.data)
  );

  return (
    <>
      {isDisplayCategories ? (
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
            {!isEmpty(audio_book.data) && (
              <Box sx={{ width: isSm ? "100%" : "240px", marginTop: "16px" }}>
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
                      url={`/audio-book?subCategory=${get(
                        audioBook,
                        "code",
                        ""
                      )}`}
                      text={get(audioBook, "name", "")}
                    />
                    <span className="Footer-link-separate"> | </span>
                  </span>
                ))}
              </Box>
            )}
            <Box sx={{ width: isSm ? "100%" : "256px", marginTop: "16px" }}>
              {!isEmpty(story_book.data) && (
                <>
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
                        url={`/story-book?subCategory=${get(
                          storyBook,
                          "code",
                          ""
                        )}`}
                        text={get(storyBook, "name", "")}
                      />
                      <span className="Footer-link-separate"> | </span>
                    </span>
                  ))}
                </>
              )}

              {!isEmpty(podcast.data) && (
                <>
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
                        url={`/podcast?subCategory=${get(
                          podcastItem,
                          "code",
                          ""
                        )}`}
                        text={get(podcastItem, "name", "")}
                      />
                      <span className="Footer-link-separate"> | </span>
                    </span>
                  ))}
                </>
              )}
            </Box>

            {!isEmpty(summary_book.data) && (
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
            )}

            {!isEmpty(children_book.data) && (
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
            )}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </>
  );
};

const FooterLongDescriptionAndCategoryList = ({ isSm, pageTitle }) => {
  let descriptionInfo;

  switch (pageTitle) {
    case PageTitles.HOME:
      descriptionInfo = LongDescription.HomePage;
      break;
    case PageTitles.AUDIO_BOOK:
      descriptionInfo = LongDescription.AudioBookPage;
      break;
    case PageTitles.PODCAST:
      descriptionInfo = LongDescription.PodcastPage;
      break;
  }

  const desc = get(descriptionInfo, "desc", "");
  const title = get(descriptionInfo, "title", "");

  return (
    <Box
      sx={{
        padding: isSm ? "56px 15px" : "56px 47px",
        borderBottom: "1px solid #292B32",
      }}
    >
      {!!descriptionInfo && (
        <>
          <Typography
            sx={{
              ...TEXT_STYLE.h2,
              color: COLORS.white,
              marginBottom: "24px",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              padding: "32px",
              backgroundColor: "#292B32",
              borderRadius: "6px",
            }}
          >
            <ReadMore
              moreBtn={
                <div className="flex items-center mt-10">
                  <span className="mr-5 line-height-0" style={{ ...TEXT_STYLE.content2, color: COLORS.white }}>Xem thêm</span>
                  <ChevronDownIcon stroke="#ffffff" />
                </div>
              }
              lessBtn={
                <div className="flex items-center mt-10">
                  <span className="mr-5 line-height-0" style={{ ...TEXT_STYLE.content2, color: COLORS.white }}>Thu gọn</span>
                  <ChevronDownIcon stroke="#ffffff" />
                </div>
              }
            >
              <Typography
                sx={{
                  ...TEXT_STYLE.content2,
                  color: COLORS.VZ_Text_content,
                  marginBottom: "16px",
                }}
              >
                {desc}
              </Typography>
            </ReadMore>
          </Box>
        </>
      )}

      <FooterCategoryList isSm={isSm} />
    </Box>
  );
};

export default FooterLongDescriptionAndCategoryList;
