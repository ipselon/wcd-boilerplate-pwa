// @param {GoToAppPageByUrlOptionsTypes from ./pageNavigation.props.js}
export const goToAppPageByUrl = options => dispatch => {
  // do something here with options;
  const { url } = options;
  if (url && window.__applicationBrowserHistory) {
    window.__applicationBrowserHistory.push(url);
  }
};
