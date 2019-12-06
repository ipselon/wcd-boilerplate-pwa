import isNil from 'lodash/isNil';
import pickBy from 'lodash/pickBy';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FabMUI from '@material-ui/core/Fab';
import ButtonCircularProgress from './assets/ButtonCircularProgress';
import { FloatingActionButtonTypes } from './FloatingActionButton.props';

const styles = theme => ({
  button: {
    position: 'relative',
  },
  label: {
    marginLeft: theme.spacing(1),
  }
});

class FloatingActionButton extends React.Component {
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
    const { classes, label, color, variant, disabled, icon, size, href, loading } = this.props;
    const muiButtonProps = pickBy({variant, color, disabled, size, href}, i => !isNil(i));
    let iconElement = null;
    if (icon && icon.length > 0) {
      iconElement = icon[0];
    }
    let labelElement = null;
    if (label) {
      if (iconElement) {
        labelElement = <span className={classes.label}>{label}</span>;
      } else {
        labelElement = <span>{label}</span>;
      }
    }
    if (loading) {
      muiButtonProps.disabled = true;
    }
    return (
      <FabMUI
        className={classes.button}
        onClick={this.handleButtonClick}
        {...muiButtonProps}
      >
        {iconElement}
        {labelElement}
        {loading && (
          <ButtonCircularProgress size={size} />
        )}
      </FabMUI>
    );
  }
}

FloatingActionButton.propTypes = FloatingActionButtonTypes;

FloatingActionButton.defaultProps = {
  onClick: () => {
    console.info('FloatingActionButton.onClick is not set');
  }
};

export default withStyles(styles)(FloatingActionButton);