import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Button from './Button';

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
    flexGrow: 0,
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
    flexGrow: 1,
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

  handleControlClick = ({id, href}) => {
    if (this.props.onItemClick) {
      this.props.onItemClick({id, href});
    }
  };

  render() {
    const { classes, menuLabel, size, items, titleElement } = this.props;
    let mobileControls = [];
    let desktopControls = [];
    if (items && items.length > 0) {
      const mobileControlMenuItems = [];
      for (let i = 0; i < items.length; i++) {
        const { id, href, label, active, disabled } = items[i];
        mobileControlMenuItems.push({
          id,
          label,
          selected: active,
          disabled,
          href,
        });
        desktopControls.push(
          <Button
            key={`navButton${i}`}
            size={size}
            color="inherit"
            variant={active ? 'outlined' : 'text'}
            disabled={disabled}
            id={id}
            label={label}
            href={href}
            onClick={this.handleControlClick}
          />
        );
      }
      mobileControls.push(
        <Button
          key="mobileButton"
          size={size}
          menu={mobileControlMenuItems}
          label={menuLabel}
          variant="text"
          color="inherit"
          onMenuItemClick={this.handleControlClick}
        />
      );
    }
    return (
      <div className={classes.root}>
        {titleElement && (
          <div className={classes.titleSection}>
            {titleElement}
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
          <div className={classes.leftSection} />
          <div className={classes.rightSection}>
            {desktopControls.map((control, index) => {
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

export default withStyles(styles)(TopNavigation);
