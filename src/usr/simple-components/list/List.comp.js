import React from 'react';
import PropTypes from 'prop-types';
import ListMUI from '@material-ui/core/List';

class List extends React.Component {
  render() {
    const { content, component, dense, disablePadding, subheader } = this.props;
    return (
      <ListMUI
        component={component}
        dense={dense}
        disablePadding={disablePadding}
        subheader={subheader}
      >
        {content}
      </ListMUI>
    );
  }
}

List.propTypes = {
  // The content of the component.
  content: PropTypes.arrayOf(PropTypes.element),
  // The component used for the root node. Either a string to use a DOM element or a component.
  component: PropTypes.oneOf(['ul', 'nav', 'div']),
  /*
  If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items.
  The prop is available to descendant components as the dense context.
   */
  dense: PropTypes.bool,
  // If true, vertical padding will be removed from the list.
  disablePadding: PropTypes.bool,
  // The content of the subheader, normally ListSubheader.
  subheader: PropTypes.arrayOf(PropTypes.element),
  //
  // testArray: PropTypes.arrayOf(PropTypes.shape({
  //   field1: PropTypes.string,
  //   field2: PropTypes.oneOf(['test1', 'test2']),
  //   nestedArray: PropTypes.arrayOf(PropTypes.shape({
  //     nestedField1: PropTypes.number,
  //     nestedField2: PropTypes.oneOf(['test1', 'test2']),
  //     nestedField3: PropTypes.bool,
  //   }))
  // })),
};

List.defaultProps = {
  items: [],
  component: 'ul',
  dense: false,
  disablePadding: false,
  subheader: [],
};

export default List;
