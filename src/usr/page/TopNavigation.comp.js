import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { TopNavigationTypes } from './TopNavigation.props';
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

class TopNavigation extends React.Component {

  render() {
    const { classes, mobileView, desktopView, title } = this.props;
    let mobileControls = [];
    let desktopLeftControls = [];
    let desktopRightControls = [];
    if (mobileView) {
      mobileControls = mobileView.controls || [];
    }
    if (desktopView) {
      desktopLeftControls = desktopView.leftControls || [];
      desktopRightControls = desktopView.rightControls || [];
    }
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
          <div className={classes.leftSection} />
          <div className={classes.rightSection}>
            {mobileControls.map((control, index) => {
              return (
                <div key={`control${index}`}>{control}</div>
              );
            })}
          </div>
        </Hidden>
        {/* Show for desktop */}
        <Hidden xsDown implementation="js">
          <div className={classes.leftSection}>
            {desktopLeftControls.map((control, index) => {
              return (
                <div key={`control${index}`}>{control}</div>
              );
            })}
          </div>
          <div className={classes.rightSection}>
            {desktopRightControls.map((control, index) => {
              return (
                <div key={`control${index}`}>{control}</div>
              );
            })}
          </div>
        </Hidden>
      </div>
    );
  }
}

TopNavigation.propTypes = TopNavigationTypes;

TopNavigation.defaultProps = {
  title: {
    text: 'Some Title',
    variant: 'h6',
    noWrap: true,
  },
  mobileView: {
    controls: [],
  },
  desktopView: {
    leftControls: [
    ],
    rightControls: [
      <span/>,
      <span/>,
    ],
  }
};

export default withStyles(styles)(TopNavigation);
