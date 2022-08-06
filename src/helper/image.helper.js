import { SCREEN_BREAKPOINTS } from "../utils/constants";

export const getPlaylistImgWidth = (windowSize, itemPerLineCounter, spaceBetween, drawerWidth, sidePadding) => {
  const isSm = windowSize.width <= SCREEN_BREAKPOINTS.sm ? true : false;
  const width = windowSize.width;
  let innerWidth = width - sidePadding * 2;
  const spaceToBeSubtracted =
    ((itemPerLineCounter - 1) * spaceBetween) / itemPerLineCounter;
  if (!isSm) {
    innerWidth -= drawerWidth;
  }
  return innerWidth / itemPerLineCounter - spaceToBeSubtracted;
};

export const getFeaturedAuthorWidth = (numItemsPerLine, columnGap, isSm) => {
  const el = document.getElementById("author-detail-info");
  const innerWidth = el.clientWidth;
  const padding = isSm ? 36 : 64;
  const widthPerItems =
    (innerWidth - padding) / numItemsPerLine -
    ((numItemsPerLine - 1) * columnGap) / numItemsPerLine;
  return widthPerItems;
};