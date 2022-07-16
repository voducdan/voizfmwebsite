import { SharedType } from "../constants/shareType.constant";

export const getSharedLink = (slug, type) =>
  slug && type
    ? `${window.location.origin}/share/${slug}?t=${type}`
    : "";

export const getTypeUrlString = (type) => {
  switch (type) {
    case SharedType.Playlist:
      return 
      break;
  
    default:
      return '';
      break;
  }
}
