import React from 'react';
import PropTypes from 'prop-types';
import ListItemMUI from '@material-ui/core/ListItem';

class ListItem extends React.Component {
  render() {
    const {
      alignItems,
      autoFocus,
      button,
      content,
      dense,
      disabled,
      disableGutters,
      divider,
      selected,
      onClick
    } = this.props;
    return (
      <ListItemMUI
        alignItems={alignItems}
        autoFocus={autoFocus}
        button={button}
        dense={dense}
        disabled={disabled}
        disableGutters={disableGutters}
        divider={divider}
        selected={selected}
        onClick={onClick}
      >
        {content}
      </ListItemMUI>
    );
  }
}

ListItem.propTypes = {
  // Defines the align-items style property.
  alignItems: PropTypes.oneOf(['flex-start', 'center']),
  /*
  If true, the list item will be focused during the first mount.
  Focus will also be triggered if the value changes from false to true.
   */
  autoFocus: PropTypes.bool,
  /*
  If true, the list item will be a button (using ButtonBase).
  Props intended for ButtonBase can then be applied to ListItem.
   */
  button: PropTypes.bool,
  /*
  The content of the component.
  If a ListItemSecondaryAction is used it must be the last child.
   */
  content: PropTypes.arrayOf(PropTypes.element),
  // If true, compact vertical padding designed for keyboard and mouse input will be used.
  dense: PropTypes.bool,
  // If true, the list item will be disabled.
  disabled: PropTypes.bool,
  // If true, the left and right padding is removed.
  disableGutters: PropTypes.bool,
  // If true, a 1px light border is added to the bottom of the list item.
  divider: PropTypes.bool,
  // Use to apply selected styling.
  selected: PropTypes.bool,
  // Triggers when the user clicks on the list item
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  alignItems: 'center',
  autoFocus: false,
  button: false,
  content: [],
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false,
  selected: false,
  onClick: PropTypes.func,
};


export default ListItem;
