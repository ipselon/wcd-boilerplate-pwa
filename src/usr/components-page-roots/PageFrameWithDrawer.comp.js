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
import validElevationMap from 'usr/components-library/common-props/utils/elevationMap';
import pickWithValues from 'usr/components-library/common-props/utils/pickWithValues';
import Box from 'usr/components-library/layouts/Box';
import Container from 'usr/components-library/layouts/Container';
import BottomNavigation from 'usr/components-library/navigation/BottomNavigation';
import PageHelmet from 'usr/components-library/misc/PageHelmet';
import PageParametersReceiver from 'usr/components-library/misc/PageParametersReceiver';
import MenuIcon from '../icons/material/MenuIcon';
import CloseIcon from '../icons/material/CloseIcon';

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

  handleBottomNavigationChange = (options) => {
    this.props.onBottomNavigationChange(options);
  };

  handlePageParametersReceived = (options) => {
    this.props.onPageParametersReceived(options);
  };

  render () {
    const {
      classes,
      pageHeader,
      pageParameters,
      drawer,
      applicationTopBar,
      applicationBottomBar,
      content,
      footer,
      hidden,
    } = this.props;
    const { isMobileDrawerOpen } = this.state;
    return (
      <React.Fragment>
        <PageHelmet {...pickWithValues(pageHeader)} />
        <div className={classes.root}>
          <CssBaseline/>
          <AppBar
            position="fixed"
            elevation={validElevationMap[applicationTopBar.elevation]}
            className={classes.appBar}
          >
            <Toolbar>
              {drawer && drawer.available && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography {...pickWithValues(applicationTopBar.title)}>
                {applicationTopBar.title.text}
              </Typography>
            </Toolbar>
          </AppBar>
          {drawer && drawer.available && (
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
                    <CloseIcon />
                  </IconButton>
                </div>
                {drawer.child}
              </Drawer>
            </Hidden>
          )}
          {applicationBottomBar && applicationBottomBar.available && (
            <Hidden smUp implementation="js">
              <AppBar
                position="fixed"
                color="primary"
                className={classes.bottomAppBar}
                elevation={0}
              >
                <div className={classes.toolbar}>
                  <BottomNavigation
                    {...applicationBottomBar.bottomNavigation}
                    onChange={this.handleBottomNavigationChange}
                  />
                </div>
              </AppBar>
            </Hidden>
          )}
          {drawer && drawer.available && (
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
              <Box {...content.contentContainerBox}>
                <Container {...content.contentContainer}>
                  {content.child}
                </Container>
              </Box>
            </div>
            {applicationBottomBar && applicationBottomBar.available && (
              <Hidden smUp implementation="js">
                <div className={classes.toolbar}/>
              </Hidden>
            )}
            {footer && footer.available && (
              <Hidden xsDown implementation="js">
                <div className={classes.footerContent}>
                  <Box {...footer.footerContainerBox}>
                    <Container {...footer.footerContainer}>
                      {footer.child}
                    </Container>
                  </Box>
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
  drawer: {
    available: true,
    width: '250px',
    child: <span />,
  },
  applicationTopBar: {
    title: {
      text: 'Some Title Here',
      variant: 'h6',
      noWrap: true,
    },
    elevation: '3',
  },
  applicationBottomBar: {
    available: true,
    bottomNavigation: {
      showLabels: true,
      activeNavigationKey: 'navItem1',
      navigationItems: [
        {
          navigationKey: 'navItem1',
          label: 'Nav Item 1',
        },
        {
          navigationKey: 'navItem2',
          label: 'Nav Item 2',
        },
        {
          navigationKey: 'navItem3',
          label: 'Nav Item 3',
        },
      ]
    }
  },
  content: {
    contentContainer: {
      fixed: false,
      maxWidth: 'lg',
      disableMaxWidth: false,
    },
    contentContainerBox: {
      sizing: {
        width: '100%',
      },
      spacing: {
        paddingSpacing: {
          paddingTop: '1'
        }
      }
    },
    child: <span/>,
  },
  footer: {
    available: true,
    footerContainer: {
      fixed: false,
      maxWidth: 'lg',
      disableMaxWidth: false,
    },
    footerContainerBox: {
      sizing: {
        width: '100%',
      },
    },
    child: <span/>,
  },
  contentHidden: [],
  onBottomNavigationChange: () => {
    console.info('PageFrameWithDrawer.onBottomNavigationChange is not set');
  },
  onPageParametersReceived: () => {
    console.info('PageFrameWithDrawer.onPageParametersReceived is not set');
  },
};

export default withStyles(styles)(PageFrameWithDrawer);
