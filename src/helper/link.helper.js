import { SharedType } from "../constants/shareType.constant";

export const getSharedLink = (mainSlug, type, otherSlug) =>
  mainSlug && type
    ? `${window.location.origin}/share/${mainSlug}${otherSlug ? `/${otherSlug}` : ''}?t=${type}`
    : "";
