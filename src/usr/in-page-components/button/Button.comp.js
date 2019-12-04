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
    const { label } = this.props;

    return (
      <ButtonMUI onClick={this.handleButtonClick}>
        {label}
      </ButtonMUI>
    );
  }
}

Button.propTypes = ButtonTypes;

Button.defaultProps = {
  label: 'Button',
  onClick: () => {
    console.info('Button.onClick is not set');
  }
};

export default Button;
