import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { TopNavigationWithControlsTypes } from './TopNavigationWithControls.props';
import Button from './lib/Button';
import IconButton from './lib/IconButton';
import pickWithValues from './utils/pickWithValues';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  titleSection: {
    flexGrow: 0,
    marginRight: theme.spacing(2),
  },
  leftSection: {
    flexGrow: 1,
    display: 'flex',
    '& div:first-child': {
      marginLeft: 0,
    },
    '& div': {
      marginLeft: theme.spacing(1),
    },
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rightSection: {
    flexGrow: 0,
    display: 'flex',
    '& div:last-child': {
      marginRight: 0,
    },
    '& div': {
      marginRight: theme.spacing(1),
    },
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});

class TopNavigationWithControls extends React.Component {

  handleButtonClick = id => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onControlClick({
      id
    });
  };

  createControls = (controlArea, controlsSize) => {
    const { byId, icons } = this.props;
    const buttons = [];
    if (controlArea && controlArea.length > 0) {
      for (let i = 0; i < controlArea.length; i++) {
        const { id, controlType, iconButton, button } = controlArea[i];
        let loadingIds = [];
        let disabledIds = [];
        if (byId) {
          loadingIds = byId.loadingIds;
          disabledIds = byId.disabledIds;
        }
        const loading = loadingIds.findIndex(controlId => controlId === id) >= 0;
        const disabled = disabledIds.findIndex(controlId => controlId === id) >= 0;
        if (controlType === 'iconButton') {
          const { iconIndex } = iconButton;
          buttons.push(
            <div key={`actionButton${i}`}>
              <IconButton
                icon={icons[iconIndex]}
                size={controlsSize}
                loading={loading}
                disabled={disabled}
                color="inherit"
                onClick={this.handleButtonClick(id)}
              />
            </div>
          );
        } else if (controlType === 'button') {
          const { label, startIconIndex, endIconIndex } = button;
          buttons.push(
            <div key={`actionButton${i}`}>
              <Button
                startIcon={icons[startIconIndex]}
                endIcon={icons[endIconIndex]}
                loading={loading}
                variant="text"
                color="inherit"
                size={controlsSize}
                label={label}
                disabled={disabled}
                onClick={this.handleButtonClick(id)}
              />
            </div>
          );
        }
      }
    }
    return buttons;
  };

  render() {
    const { classes, mobile, desktop, title } = this.props;
    const {} = mobile;
    const { leftArea, rightArea, controlsSize } = desktop;
    const leftButtons = this.createControls(leftArea, controlsSize);
    const rightButtons = this.createControls(rightArea, controlsSize);
    return (
      <div className={classes.root}>
        {title && title.text && (
          <div className={classes.titleSection}>
            <Typography {...pickWithValues(title)}>
              {title.text}
            </Typography>
          </div>
        )}
        {/* Show for mobile */}
        <Hidden smUp implementation="js">
          <div className={classes.rightSection}>
            {rightButtons}
          </div>
        </Hidden>
        {/* Show for desktop */}
        <Hidden xsDown implementation="js">
          <div className={classes.leftSection}>
            {leftButtons}
          </div>
          <div className={classes.rightSection}>
            {rightButtons}
          </div>
        </Hidden>
      </div>
    );
  }
}

TopNavigationWithControls.propTypes = TopNavigationWithControlsTypes;

TopNavigationWithControls.defaultProps = {
  title: {
    text: 'Some Title',
    variant: 'h6',
    noWrap: true,
  },
  byId: {
    disabledIds: [],
    loadingIds: [],
  },
  mobile: {},
  desktop: {
    controlsSize: 'large',
    leftArea: [
      {id: 'topControl1', controlType: 'button', button: {label: 'Left Nav 1'}},
      {id: 'topControl2', controlType: 'button', button: {label: 'Left Nav 2'}}
    ],
    rightArea: [
      {id: 'topControl3', controlType: 'button', button: {label: 'Right Nav 1'}},
    ],
  },
  onControlClick: () => {
    console.info('TopNavigationWithControls.onControlClick is not set');
  }
};

export default withStyles(styles)(TopNavigationWithControls);