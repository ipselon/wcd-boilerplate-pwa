import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CloseIcon from '@material-ui/icons/Close';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { PageFrameWithDrawerTypes } from './PageFrameWithDrawer.props';
import validElevationMap from '../../common-props/utils/elevationMap';

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    flexShrink: 0,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  mainContent: {
    display: 'flex',
    position: 'relative',
    flexGrow: 1,
  },
  footerContent: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
  hiddenArea: {
    display: 'none',
  }
});

class PageFrameWithDrawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isMobileDrawerOpen: false,
    };
  }

  handleDrawerToggle = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({
      isMobileDrawerOpen: !this.state.isMobileDrawerOpen,
    });
  };

  render () {
    const {
      classes,
      drawer,
      topAppBar,
      bottomAppBar,
      mainContent,
      hiddenMainContent,
      footerContent,
    } = this.props;
    const { isMobileDrawerOpen } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline/>
          <AppBar
            position="fixed"
            elevation={validElevationMap[topAppBar.elevation] || 3}
            className={classes.appBar}
          >
            <Toolbar>
              {drawer.content && drawer.content.length > 0 && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon/>
                </IconButton>
              )}
              <Typography variant={topAppBar.titleVariant} noWrap>
                {topAppBar.title}
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer.content && drawer.content.length > 0 && (
            <Hidden smUp implementation="js">
              <Drawer
                className={classes.drawer}
                variant="temporary"
                style={{ width: drawer.width }}
                open={isMobileDrawerOpen}
                anchor="left"
                PaperProps={{ style: { width: drawer.width } }}
                ModalProps={{ keepMounted: true }}
                onClose={this.handleDrawerToggle}
              >
                <div className={classes.toolbar}>
                  <IconButton
                    onClick={this.handleDrawerToggle}
                    className={classes.closeMenuButton}
                  >
                    <CloseIcon/>
                  </IconButton>
                </div>
                {drawer.content}
              </Drawer>
            </Hidden>
          )}
          {bottomAppBar.content && bottomAppBar.content.length > 0 && (
            <Hidden smUp implementation="js">
              <AppBar
                position="fixed"
                color="primary"
                className={classes.bottomAppBar}
                elevation={validElevationMap[bottomAppBar.elevation] || 3}
              >
                <div className={classes.toolbar}>
                  {bottomAppBar.content}
                </div>
              </AppBar>
            </Hidden>
          )}
          {drawer.content && drawer.content.length > 0 && (
            <Hidden xsDown implementation="js">
              <Drawer
                className={classes.drawer}
                variant="permanent"
                style={{ width: drawer.width }}
                PaperProps={{ style: { width: drawer.width } }}
              >
                <div className={classes.toolbar}/>
                {drawer.content}
              </Drawer>
            </Hidden>
          )}
          <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.mainContent}>
              {mainContent}
            </div>
            {bottomAppBar.content && bottomAppBar.content.length > 0 && (
              <Hidden smUp implementation="js">
                <div className={classes.toolbar}/>
              </Hidden>
            )}
            {footerContent && footerContent.length > 0 && (
              <Hidden xsDown implementation="js">
                <div className={classes.footerContent}>
                  {classes.footerContent}
                </div>
              </Hidden>
            )}
          </main>
        </div>
        <div className={classes.hiddenArea}>
          {hiddenMainContent}
        </div>
      </React.Fragment>
    );
  }
}

PageFrameWithDrawer.propTypes = PageFrameWithDrawerTypes;

PageFrameWithDrawer.defaultProps = {
  drawer: {
    width: '250px',
    content: [<div>Drawer</div>],
  },
  topAppBar: {
    title: 'Some Title Here',
    titleVariant: 'h6',
    elevation: '3',
  },
  bottomAppBar: {
    elevation: '3',
  },
  mainContent: [
    <span />
  ],
  hiddenMainContent: [],
};

export default withStyles(styles)(PageFrameWithDrawer);
