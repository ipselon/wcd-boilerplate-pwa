import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import pickWithValues from '../utils/pickWithValues';
import ButtonCircularProgress from './ButtonCircularProgress';

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

Button.propTypes = {
  /**
   * Button label text
   */
  label: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An element placed after the button label.
   */
  endIcon: PropTypes.node,
  /**
   * An element placed before the button label.
   */
  startIcon: PropTypes.node,
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /*
   * Triggered when the user click on the button
   *
   */
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Button',
  variant: 'contained',
  onClick: () => {
    console.info('Button.onClick is not set');
  }
};

export default Button;
