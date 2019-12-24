import React from 'react';
import IconButtonMUI from '@material-ui/core/IconButton';
import pickWithValues from 'usr/common-props/utils/pickWithValues';
import ButtonCircularProgress from './assets/ButtonCircularProgress';
import { IconButtonTypes } from './props/IconButton';

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
    const muiButtonProps = pickWithValues({color, edge, disabled, size});
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
