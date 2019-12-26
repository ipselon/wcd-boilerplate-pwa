import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { PageFrameWithDrawerTypes } from './PageFrameWithDrawer.props';
import validElevationMap from 'usr/library/props/utils/elevationMap';
import pickWithValues from 'usr/library/props/utils/pickWithValues';
import PageHelmet from 'usr/library/components/PageHelmet';
import PageParametersReceiver from 'usr/library/components/PageParametersReceiver';
import MenuIcon from 'usr/library/icons/material/MenuIcon';
import CloseIcon from 'usr/library/icons/material/CloseIcon';

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

  handleDrawerOpenClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onDrawerOpenClick();
  };

  handleDrawerCloseClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onDrawerCloseClick();
  };

  handlePageParametersReceived = (options) => {
    this.props.onPageParametersReceived(options);
  };

  render () {
    const {
      classes,
      pageHeader,
      pageParameters,
      topBar,
      drawerIsAvailable,
      bottomBarIsAvailable,
      footerIsAvailable,
      drawer,
      bottomBar,
      content,
      footer,
      hidden,
      drawerOpen,
      title,
    } = this.props;
    return (
      <React.Fragment>
        <PageHelmet {...pickWithValues(pageHeader)} />
        <CssBaseline/>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            color={topBar.color}
            elevation={validElevationMap[topBar.elevation]}
            className={classes.appBar}
          >
            <Toolbar>
              {drawerIsAvailable && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerOpenClick}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              )}
              {title && title.text && (
                <Typography {...pickWithValues(title)}>
                  {title.text}
                </Typography>
              )}
              {topBar.child}
            </Toolbar>
          </AppBar>
          {drawerIsAvailable && (
            <Hidden smUp implementation="js">
              <Drawer
                className={classes.drawer}
                variant="temporary"
                style={{ width: drawer.width }}
                open={drawerOpen}
                anchor="left"
                PaperProps={{ style: { width: drawer.width } }}
                ModalProps={{ keepMounted: true }}
                onClose={this.handleDrawerCloseClick}
              >
                <div className={classes.toolbar}>
                  <IconButton
                    onClick={this.handleDrawerCloseClick}
                    className={classes.closeMenuButton}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                {drawer.child}
              </Drawer>
            </Hidden>
          )}
          {bottomBarIsAvailable && (
            <Hidden smUp implementation="js">
              <AppBar
                position="fixed"
                color={bottomBar.color}
                className={classes.bottomAppBar}
                elevation={0}
              >
                <div className={classes.toolbar}>
                  {bottomBar.child}
                </div>
              </AppBar>
            </Hidden>
          )}
          {drawerIsAvailable && (
            <Hidden xsDown implementation="js">
              <Drawer
                className={classes.drawer}
                variant="permanent"
                style={{ width: drawer.width }}
                PaperProps={{ style: { width: drawer.width } }}
              >
                <div className={classes.toolbar}/>
                {drawer.child}
              </Drawer>
            </Hidden>
          )}
          <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.mainContent}>
              {content.child}
            </div>
            {bottomBarIsAvailable && (
              <Hidden smUp implementation="js">
                <div className={classes.toolbar}/>
              </Hidden>
            )}
            {footerIsAvailable && (
              <Hidden xsDown implementation="js">
                <div className={classes.footerContent}>
                  {footer.child}
                </div>
              </Hidden>
            )}
          </main>
        </div>
        <div className={classes.hiddenArea}>
          <PageParametersReceiver
            {...pickWithValues(pageParameters)}
            onPageParametersReceived={this.handlePageParametersReceived}
          />
          {hidden}
        </div>
      </React.Fragment>
    );
  }
}

PageFrameWithDrawer.propTypes = PageFrameWithDrawerTypes;

PageFrameWithDrawer.defaultProps = {
  pageHeader: {
    title: "New Page"
  },
  drawerIsAvailable: true,
  bottomBarIsAvailable: true,
  footerIsAvailable: true,
  title: {
    text: 'Some Title Here',
    variant: 'h6',
    noWrap: true,
  },
  drawer: {
    available: true,
    width: '250px',
    child: <span />,
  },
  topBar: {
    elevation: '3',
  },
  content: { child: <span /> },
  footer: { child: <span /> },
  contentHidden: [],
  onPageParametersReceived: () => {
    console.info('PageFrameWithDrawer.onPageParametersReceived is not set');
  },
  onDrawerOpenClick: () => {
    console.info('PageFrameWithDrawer.onDrawerOpenClick is not set');
  },
  onDrawerCloseClick: () => {
    console.info('PageFrameWithDrawer.onDrawerCloseClick is not set');
  },
};

export default withStyles(styles)(PageFrameWithDrawer);
