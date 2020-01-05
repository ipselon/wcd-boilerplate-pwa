import React from 'react';
import PropTypes from 'prop-types';
import IconButtonMUI from '@material-ui/core/IconButton';
import pickWithValues from '../utils/pickWithValues';
import ButtonCircularProgress from './ButtonCircularProgress';

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

IconButton.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with content above or below,
   * without ruining the border size and shape).
   */
  edge: PropTypes.oneOf(['', 'start', 'end', 'false']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Icon
   */
  icon: PropTypes.element,
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium']),
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /*
   * Triggered when the user click on the button
   */
  onClick: PropTypes.func
};

IconButton.defaultProps = {
  icon: <span/>,
  onClick: () => {
    console.info('IconButton.onClick is not set');
  }
};

export default IconButton;
