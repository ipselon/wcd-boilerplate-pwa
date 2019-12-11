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

  const { buttons, icons, color, variant, disabled, size, fullWidth } = props;

  const buttonsElements = [];
  if (buttons && buttons.length > 0) {
    let muiButtonProps;
    for (let i = 0; i < buttons.length; i++) {
      const { id, loading, label, disabled, href } = buttons[i];
      muiButtonProps = pickBy({disabled, href}, prop => !isNil(prop));
      if (loading) {
        muiButtonProps.disabled = true;
      }
      if (label) {
        if (icons && icons.length > i) {
          if (icons[i].startIcon && icons[i].startIcon.length > 0) {
            muiButtonProps.startIcon = icons[i].startIcon[0];
          }
          if (icons[i].endIcon && icons[i].endIcon.length > 0) {
            muiButtonProps.endIcon = icons[i].endIcon[0];
          }
        }
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
        let startIcon = null;
        let endIcon = null;
        if (icons && icons.length > i) {
          if (icons[i].startIcon && icons[i].startIcon.length > 0) {
            startIcon = icons[i].startIcon[0];
          }
          if (icons[i].endIcon && icons[i].endIcon.length > 0) {
            endIcon = icons[i].endIcon[0];
          }
        }
        buttonsElements.push(
          <ButtonMUI
            key={`${id}${i}`}
            className={classes.button}
            onClick={handleButtonClick({ id, href, label })}
            {...muiButtonProps}
          >
            {startIcon}
            {endIcon}
            {loading && (
              <ButtonCircularProgress size={size}/>
            )}
          </ButtonMUI>
        );
      }
    }
  }

  const muiButtonGroupProps = pickBy({ color, variant, disabled, size, fullWidth }, i => !isNil(i));
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
