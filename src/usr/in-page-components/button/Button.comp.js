import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import React from 'react';
import ButtonMUI from '@material-ui/core/Button';
import { ButtonTypes } from './Button.props';

class Button extends React.Component {
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
    const { label, variant, disabled, endIcon, startIcon, size, fullWidth, href } = this.props;
    console.info('Button props: ', {label, variant, disabled, endIcon, startIcon, size, fullWidth, href});
    const muiButtonProps = pickBy({variant, disabled, size, fullWidth, href}, i => !isNil(i));
    let startIconElement = null;
    if (startIcon && startIcon.length > 0) {
      muiButtonProps.startIcon = startIcon[0];
    }
    let endIconElement = null;
    if (endIcon && endIcon.length > 0) {
      muiButtonProps.endIcon = startIcon[0];
    }

    return (
      <ButtonMUI
        onClick={this.handleButtonClick}
        variant={variant}
        disabled={disabled}
        endIcon={endIconElement}
        startIcon={startIconElement}
        size={size}
        fullWidth={fullWidth}
        href={href}
      >
        {label}
      </ButtonMUI>
    );
  }
}

Button.propTypes = ButtonTypes;

Button.defaultProps = {
  label: 'Button',
  variant: 'contained',
  onClick: () => {
    console.info('Button.onClick is not set');
  }
};

export default Button;
