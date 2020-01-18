function selectLeftNavigationItemsByUrl(navigationItems, url) {
  if (navigationItems && navigationItems.length > 0) {
    for (let i = 0; i < navigationItems.length; i++) {
      if (navigationItems[i].childrenItems && navigationItems[i].childrenItems.length > 0) {
        selectLeftNavigationItemsByUrl(navigationItems[i].childrenItems, url);
      } else {
        navigationItems[i].selected = navigationItems[i].url === url;
      }
    }
  }
  return navigationItems;
}

/**
 * This function is generated by Webcodesk. Replace this comment with a valuable description.
 *
 * @functionTypes {SelectListNavigationItemByUrlTypes from ./props/ListNavigation.props.js}
 */
export const selectListNavigationItemByUrl = ({url}, state) => dispatch => {
  console.info('State: ', state);
  if (url && state) {
    // decompose targets states by connected dispatches
    const { properties: targetState } = state;
    if (targetState) {
      // decompose target state by connected props
      // it lets us to check if the user connected a function dispatch to the appropriate prop in the component instance
      const { properties: connectedPropState } = targetState;
      if (connectedPropState) {
        const listNavigationItems = connectedPropState.items;
        if (listNavigationItems && listNavigationItems.length > 0) {
          selectLeftNavigationItemsByUrl(listNavigationItems, url);
        }
        dispatch({properties: connectedPropState});
      }
    }
  }
};

function toggleExpandLeftNavigationItemsByUrl(navigationItems, url) {
  if (navigationItems && navigationItems.length > 0) {
    for (let i = 0; i < navigationItems.length; i++) {
      if (navigationItems[i].childrenItems && navigationItems[i].childrenItems.length > 0) {
        toggleExpandLeftNavigationItemsByUrl(navigationItems[i].childrenItems, url);
        if (navigationItems[i].url === url) {
          navigationItems[i].expanded = !navigationItems[i].expanded;
        }
      }
    }
  }
  return navigationItems;
}

/**
 * This function is generated by Webcodesk. Replace this comment with a valuable description.
 *
 * @functionTypes {ToggleExpandListNavigationItemByUrlTypes from ./props/ListNavigation.props.js}
 */
export const toggleExpandListNavigationItemByUrl = ({url}, state) => dispatch => {
  console.info('State: ', state);
  if (url && state) {
    // decompose targets states by connected dispatches
    const { properties: targetState } = state;
    if (targetState) {
      // decompose target state by connected props
      // it lets us to check if the user connected a function dispatch to the appropriate prop in the component instance
      const { properties: connectedPropState } = targetState;
      if (connectedPropState) {
        const listNavigationItems = connectedPropState.items;
        if (listNavigationItems && listNavigationItems.length > 0) {
          toggleExpandLeftNavigationItemsByUrl(listNavigationItems, url);
        }
        dispatch({properties: connectedPropState});
      }
    }
  }
};
