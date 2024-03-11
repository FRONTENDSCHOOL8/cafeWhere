const SITE_TITLE = '카페 어때';

export default function getDocumentTitle(pageTitle, siteTitle = SITE_TITLE) {
  return !pageTitle ? siteTitle : `${pageTitle} ← ${siteTitle}`;
}
