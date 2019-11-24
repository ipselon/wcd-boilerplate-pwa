import React from 'react';
import PropTypes from 'prop-types';
import ListItemTextMUI from '@material-ui/core/ListItemText';

class ListItemText extends React.Component {
  render() {
    const { disableTypography, inset, primary, secondary } = this.props;
    return (
      <ListItemTextMUI
        disableTypography={disableTypography}
        inset={inset}
        primary={primary}
        secondary={secondary}
      />
    );
  }
}

ListItemText.propTypes = {
  // If true then the component's instance will not be allowed to use in flows,
  // and you will not see the instance name in the pages instances list
  doNotUseInFlows: PropTypes.bool,
  /**
   * If true, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping the children (or primary) text,
   * and optional secondary text with the Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * If true, the children will be indented. This should be used if there is no left avatar or left icon.
   */
  inset: PropTypes.bool,
  /**
   * The main content element.
   */
  primary: PropTypes.arrayOf(PropTypes.element),
  /**
   * The secondary content element.
   */
  secondary: PropTypes.arrayOf(PropTypes.element),

};

ListItemText.defaultProps = {
  doNotUseInFlows: true,
  disableTypography: false,
  inset: false,
  primary: [],
  secondary: [],
};

export default ListItemText;
