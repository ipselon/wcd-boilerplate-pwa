import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import ButtonGroupMUI from '@material-ui/core/ButtonGroup';
import ButtonCircularProgress from './assets/ButtonCircularProgress';
import { ButtonGroupTypes } from './ButtonGroup.props';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
}));

/**
 * The ButtonGroup component can be used to group outlined (the default) or contained buttons.
 */
const ButtonGroup = (props) => {
  const classes = useStyles();

  const handleButtonClick = (buttonProps) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    props.onClick(buttonProps);
  };

  const { buttons, variant, size, fullWidth } = props;

  const buttonsElements = [];
  if (buttons && buttons.length > 0) {
    let muiButtonProps;
    for (let i = 0; i < buttons.length; i++) {
      const { id, loading, label, disabled, href, color, endIcon, startIcon } = buttons[i];
      muiButtonProps = pickBy({disabled, href, color}, prop => !isNil(prop));
      if (loading) {
        muiButtonProps.disabled = true;
      }
      let startIconElement = null;
      let endIconElement = null;
      if (startIcon && startIcon.length > 0) {
        startIconElement = startIcon[0];
      }
      if (endIcon && endIcon.length > 0) {
        endIconElement = endIcon[0];
      }
      if (label) {
        muiButtonProps.startIcon = startIconElement;
        muiButtonProps.endIcon = endIconElement;
        buttonsElements.push(
          <ButtonMUI
            key={`${id}${i}`}
            className={classes.button}
            onClick={handleButtonClick({ id, href, label })}
            {...muiButtonProps}
          >
            {label}
            {loading && (
              <ButtonCircularProgress size={size}/>
            )}
          </ButtonMUI>
        );
      } else {
        buttonsElements.push(
          <ButtonMUI
            key={`${id}${i}`}
            className={classes.button}
            onClick={handleButtonClick({ id, href, label })}
            {...muiButtonProps}
          >
            {startIconElement}
            {endIconElement}
            {loading && (
              <ButtonCircularProgress size={size}/>
            )}
          </ButtonMUI>
        );
      }
    }
  }

  const muiButtonGroupProps = pickBy({ variant, size, fullWidth }, i => !isNil(i));
  return (
    <ButtonGroupMUI {...muiButtonGroupProps}>
      {buttonsElements}
    </ButtonGroupMUI>
  );
};

ButtonGroup.propTypes = ButtonGroupTypes;

ButtonGroup.defaultProps = {
  buttons: [
    {id: '0001', label: 'Button1'},
    {id: '0002', label: 'Button2'},
    {id: '0003', label: 'Button3'},
  ],
  onClick: () => {
    console.info('ButtonGroup.onClick is not set');
  }
};

export default ButtonGroup;
