import React from 'react';
import { ToolbarResponsiveTypes } from './ToolbarResponsive.props';

class ToolbarResponsive extends React.Component {

  handleChange = (e, value) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    // this.setState({
    //   activeNavigationKeyLocal: value,
    // });
    // this.props.onChange({
    //   activeNavigationKey: value,
    // });
  };

  render() {
    return (
      <div />
    );
  }
}

ToolbarResponsive.propTypes = ToolbarResponsiveTypes;

ToolbarResponsive.defaultProps = {
};

export default ToolbarResponsive;
