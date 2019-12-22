import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import pickWithValues from 'usr/components-library/common-props/utils/pickWithValues';
import ButtonCircularProgress from './assets/ButtonCircularProgress';
import { ButtonTypes } from './props/Button';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
}));

const Button = props => {
  const classes = useStyles();
  const handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    props.onClick();
  };
  const { className, label, color, variant, disabled, endIcon, startIcon, size, fullWidth, href, loading } = props;
  const muiButtonProps = pickWithValues({ variant, color, disabled, size, fullWidth, href });
  if (startIcon) {
    muiButtonProps.startIcon = startIcon;
  }
  if (endIcon) {
    muiButtonProps.endIcon = endIcon;
  }
  if (loading) {
    muiButtonProps.disabled = true;
  }
  return (
    <ButtonMUI
      className={`${className} ${classes.button}`}
      {...muiButtonProps}
      onClick={handleButtonClick}
    >
      {label}
      {loading && (
        <ButtonCircularProgress size={size} />
      )}
    </ButtonMUI>
  );
};

Button.propTypes = ButtonTypes;

Button.defaultProps = {
  label: 'Button',
  variant: 'contained',
  onClick: () => {
    console.info('Button.onClick is not set');
  }
};

export default Button;
