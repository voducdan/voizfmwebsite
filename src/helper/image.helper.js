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