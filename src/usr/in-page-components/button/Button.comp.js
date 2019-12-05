import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ButtonTypes } from './Button.props';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
  progress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 1,
  }
}));

const progressCircleSizesMap = {
  'small': 14,
  'medium': 20,
  'large': 24,
};

const ButtonCircularProgress = props => {
  const classes = useStyles();
  const progressSize = progressCircleSizesMap[props.size || 'medium'];
  const progressStyle = {
    marginTop: -(progressSize / 2),
    marginLeft: -(progressSize / 2),
  };
  return (
    <CircularProgress
      size={progressSize}
      style={progressStyle}
      className={classes.progress}
    />
  );
};

const Button = props => {
  const classes = useStyles();
  const handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    props.onClick();
  };
  const { label, color, variant, disabled, endIcon, startIcon, size, fullWidth, href, loading } = props;
  const muiButtonProps = pickBy({ variant, color, disabled, size, fullWidth, href }, i => !isNil(i));
  if (startIcon && startIcon.length > 0) {
    muiButtonProps.startIcon = startIcon[0];
  }
  if (endIcon && endIcon.length > 0) {
    muiButtonProps.endIcon = endIcon[0];
  }
  console.info('Button props: ', muiButtonProps);
  if (loading) {
    muiButtonProps.disabled = true;
  }
  return (
    <ButtonMUI
      className={classes.button}
      onClick={handleButtonClick}
      {...muiButtonProps}
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
