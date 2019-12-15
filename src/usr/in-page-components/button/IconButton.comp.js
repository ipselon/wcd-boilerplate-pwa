import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import React from 'react';
import IconButtonMUI from '@material-ui/core/IconButton';
import ButtonCircularProgress from './assets/ButtonCircularProgress';
import { IconButtonTypes } from './IconButton.props';

class IconButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onClick();
  };

  render() {
    const { color, edge, disabled, icon, size, loading } = this.props;
    const muiButtonProps = {...this.props, ...pickBy({color, edge, disabled, size}, i => !isNil(i))};
    if (loading) {
      muiButtonProps.disabled = true;
    }
    return (
      <IconButtonMUI
        onClick={this.handleButtonClick}
        {...muiButtonProps}
      >
        {icon}
        {loading && (
          <ButtonCircularProgress size={size} />
        )}
      </IconButtonMUI>
    );
  }
}

IconButton.propTypes = IconButtonTypes;

IconButton.defaultProps = {
  icon: <span/>,
  onClick: () => {
    console.info('IconButton.onClick is not set');
  }
};

export default IconButton;
