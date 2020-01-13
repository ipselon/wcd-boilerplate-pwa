import get from 'lodash/get';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import validElevationMap from './utils/elevationMap';
import pickWithValues from './utils/pickWithValues';
import PageHelmet from './lib/PageHelmet';
import MenuIcon from './icons/material/MenuIcon';
import CloseIcon from './icons/material/CloseIcon';
import TopNavigation from './lib/TopNavigation';
import ListNavigation from './lib/ListNavigation';
import BottomNavigation from './lib/BottomNavigation';
import Typography from './lib/Typography';

import { PageFrameWithDrawerTypes } from './props/PageFrameWithDrawer.props';

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

  constructor (props, context) {
    super(props, context);
    this.state = {
      leftDrawerOpen: get(this.props, 'left.drawer.open', false),
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const oldLeftDrawerOpen = get(prevProps, 'left.drawer.open', false);
    const newLeftDrawerOpen = get(this.props, 'left.drawer.open', false);
    if (oldLeftDrawerOpen !== newLeftDrawerOpen && this.state.leftDrawerOpen !== newLeftDrawerOpen) {
      this.setState({leftDrawerOpen: newLeftDrawerOpen});
    }
  }

  handleDrawerOpenClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({leftDrawerOpen: true});
  };

  handleDrawerCloseClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({leftDrawerOpen: false});
  };

  handleTopNavigationItemClick = (options) => {
    if (this.props.onTopNavigationClick) {
      this.props.onTopNavigationClick(options);
    }
  };

  handleListNavigationItemClick = (options) => {
    if (this.props.onLeftNavigationClick) {
      this.props.onLeftNavigationClick(options);
    }
  };

  handleListNavigationItemToggleExpand = (options) => {
    if (this.props.onLeftNavigationToggleExpand) {
      this.props.onLeftNavigationToggleExpand(options);
    }
  };

  render () {
    const {
      classes,
      pageHeader,
      userDetails,
      top,
      left,
      bottom,
      content,
      hidden,
      icons
    } = this.props;
    const { leftDrawerOpen } = this.state;
    const listNavigationElement = (
      <ListNavigation
        icons={icons}
        onItemClick={this.handleListNavigationItemClick}
        onItemToggleExpand={this.handleListNavigationItemToggleExpand}
        {...pickWithValues(left.navigation)}
      />
    );
    return (
      <React.Fragment>
        <PageHelmet {...pickWithValues(pageHeader)} />
        <CssBaseline/>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            color={top.color}
            elevation={validElevationMap[top.elevation]}
            className={classes.appBar}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerOpenClick}
                className={classes.menuButton}
              >
                <MenuIcon/>
              </IconButton>
              <TopNavigation
                titleElement={
                  top.title.text && (
                    <Typography {...pickWithValues(top.title)} />
                  )
                }
                {...pickWithValues(top.navigation)}
                onItemClick={this.handleTopNavigationItemClick}
              />
            </Toolbar>
          </AppBar>
          <Hidden smUp implementation="js">
            <Drawer
              className={classes.drawer}
              variant="temporary"
              style={{ width: get(left, 'drawer.width')}}
              open={leftDrawerOpen}
              anchor="left"
              PaperProps={{ style: { width: get(left, 'drawer.width') } }}
              ModalProps={{ keepMounted: true }}
              onClose={this.handleDrawerCloseClick}
            >
              <div className={classes.toolbar}>
                <IconButton
                  onClick={this.handleDrawerCloseClick}
                  className={classes.closeMenuButton}
                >
                  <CloseIcon/>
                </IconButton>
              </div>
              {listNavigationElement}
            </Drawer>
          </Hidden>
          <Hidden smUp implementation="js">
            <AppBar
              position="fixed"
              className={classes.bottomAppBar}
              elevation={0}
            >
              <div className={classes.toolbar}>
                <BottomNavigation {...pickWithValues(bottom.navigation)} />
              </div>
            </AppBar>
          </Hidden>
          <Hidden xsDown implementation="js">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              style={{ width: get(left, 'drawer.width') }}
              PaperProps={{ style: { width: get(left, 'drawer.width') } }}
            >
              <div className={classes.toolbar}/>
              {listNavigationElement}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.mainContent}>
              <div />
            </div>
            <Hidden smUp implementation="js">
              <div className={classes.toolbar}/>
            </Hidden>
            <Hidden xsDown implementation="js">
              <div className={classes.footerContent}>
                <div />
              </div>
            </Hidden>
          </main>
        </div>
        <div className={classes.hiddenArea}>
          {hidden}
        </div>
      </React.Fragment>
    );
  }
}

PageFrameWithDrawer.propTypes = PageFrameWithDrawerTypes;

PageFrameWithDrawer.defaultProps = {
  top: {
    title: {
      text: 'Title'
    },
    navigation: {
      menuLabel: 'Go To',
      size: 'medium',
      items: [
        {id: '0001', label: 'Nav 1'},
        {id: '0002', label: 'Nav 2', active: true},
        {id: '0003', label: 'Nav 3'}
      ]
    }
  },
  left: {
    drawer: {
      open: false,
      width: '250px'
    },
    navigation: {
      items: [
        {
          id: 'leftNav1', primaryText: 'Left Nav 1',
          childrenItems: [
            {id: 'leftNav11', label: 'Child Nav 1'},
            {id: 'leftNav12', label: 'Child Nav 2'}
          ]
        },
        {id: 'leftNav2', primaryText: 'Left Nav 2', selected: true},
        {id: 'leftNav3', primaryText: 'Left Nav 3'},
      ]
    }
  }
};

export default withStyles(styles)(PageFrameWithDrawer);
