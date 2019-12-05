import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import React from 'react';
import IconButtonMUI from '@material-ui/core/IconButton';
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
    const { color, edge, disabled, icon, size } = this.props;
    const muiButtonProps = pickBy({color, edge, disabled, size}, i => !isNil(i));
    let childIconElement = null;
    if (icon && icon.length > 0) {
      childIconElement = icon[0];
    }
    console.info('IconButton props: ', muiButtonProps);
    return (
      <IconButtonMUI
        onClick={this.handleButtonClick}
        {...muiButtonProps}
      >
        {childIconElement}
      </IconButtonMUI>
    );
  }
}

IconButton.propTypes = IconButtonTypes;

IconButton.defaultProps = {
  icon: [<span/>],
  onClick: () => {
    console.info('IconButton.onClick is not set');
  }
};

export default IconButton;
