import { APP_BASE_LINK } from "../constants/link.constant";

export const getSharedLink = (slug, type, optional = { withHost: true }) => {
  const host = optional.withHost && window ? window.location.origin : '';
  return slug && type
    ? `${host}/share/${slug}?t=${type}`
    : "";
}

export const getShareLinkToApp = (type, id) => type && id ? `${APP_BASE_LINK}share?type=${type}&id=${id}` : '';