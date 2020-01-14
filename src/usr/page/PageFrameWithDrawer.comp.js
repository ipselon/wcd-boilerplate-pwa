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
import findColor from './utils/colorMap';
import PageHelmet from './lib/PageHelmet';
import MenuIcon from './icons/material/MenuIcon';
import CloseIcon from './icons/material/CloseIcon';
import TopNavigation from './lib/TopNavigation';
import ListNavigation from './lib/ListNavigation';
import BottomNavigation from './lib/BottomNavigation';
import Typography from './lib/Typography';
import Container from './lib/Container';
import ContentGrid from './lib/ContentGrid';

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
      this.setState({ leftDrawerOpen: newLeftDrawerOpen });
    }
  }

  handleDrawerOpenClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ leftDrawerOpen: true });
  };

  handleDrawerCloseClick = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ leftDrawerOpen: false });
  };

  handleTopNavigationItemClick = ({id, href}) => {
    const {onTopNavigationClick, top} = this.props;
    if (onTopNavigationClick) {
      onTopNavigationClick({id, href, top});
    }
  };

  handleListNavigationItemClick = ({id, href}) => {
    const {onLeftNavigationClick, left} = this.props;
    if (onLeftNavigationClick) {
      onLeftNavigationClick({id, href, left});
    }
  };

  handleListNavigationItemToggleExpand = ({id, href}) => {
    const {onLeftNavigationToggleExpand, left} = this.props;
    if (onLeftNavigationToggleExpand) {
      onLeftNavigationToggleExpand({id, href, left});
    }
  };

  handleBottomNavigationItemClick = ({id}) => {
    const {onBottomNavigationClick, bottom} = this.props;
    if (onBottomNavigationClick) {
      onBottomNavigationClick({id, bottom});
    }
  };

  render () {
    const {
      theme,
      classes,
      hidden,
    } = this.props;
    const { leftDrawerOpen } = this.state;

    const icons = this.props.icons || [];

    const pageHeader = this.props.pageHeader || {};

    const top = this.props.top || {};
    const topTitle = top.title || {};
    const topNavigation = top.navigation || {};
    const topPalette = top.palette || {};

    const topStyle = {};
    if (topPalette.color) {
      const { colorHue, colorShade } = topPalette.color;
      topStyle.color = findColor(colorHue, colorShade, theme);
    }
    if (topPalette.backgroundColor) {
      const { colorHue, colorShade } = topPalette.backgroundColor;
      topStyle.backgroundColor = findColor(colorHue, colorShade, theme);
    }

    const left = this.props.left || {};
    const leftNavigation = left.navigation || {};
    const leftDrawer = left.drawer || {};

    let listNavigationElement = null;
    if (leftNavigation.items && leftNavigation.items.length > 0) {
      listNavigationElement = (
        <ListNavigation
          icons={icons}
          onItemClick={this.handleListNavigationItemClick}
          onItemToggleExpand={this.handleListNavigationItemToggleExpand}
          {...pickWithValues(leftNavigation)}
        />
      );
    }

    const main = this.props.main || {};
    const mainContent = main.content || {};
    const mainFooter = main.footer || {};
    const mainPalette = main.palette || {};

    const mainStyle = {};
    if (mainPalette.color) {
      const { colorHue, colorShade } = mainPalette.color;
      mainStyle.color = findColor(colorHue, colorShade, theme);
    }
    if (mainPalette.backgroundColor) {
      const { colorHue, colorShade } = mainPalette.backgroundColor;
      mainStyle.backgroundColor = findColor(colorHue, colorShade, theme);
    }

    let footerElement = null;
    if (mainFooter.cells && mainFooter.cells.length > 0) {
      footerElement = (
        <div className={classes.footerContent}>
          <Container
            fixed={main.fixed}
            maxWidth={main.maxWidth}
            disableMaxWidth={main.disableMaxWidth}
          >
            <ContentGrid
              alignContent="flex-start"
              alignItems="stretch"
              spacing={main.spacing}
              cells={mainFooter.cells}
            />
          </Container>
        </div>
      );
    }

    const bottom = this.props.bottom || {};
    const bottomNavigation = bottom.navigation || {};

    let bottomElement = null;
    if (bottomNavigation.items && bottomNavigation.items.length > 0) {
      bottomElement = (
        <Hidden smUp implementation="js">
          <AppBar
            position="fixed"
            className={classes.bottomAppBar}
            elevation={0}
          >
            <div className={classes.toolbar}>
              <BottomNavigation
                icons={icons}
                {...pickWithValues(bottomNavigation)}
                onClick={this.handleBottomNavigationItemClick}
              />
            </div>
          </AppBar>
        </Hidden>
      );
    }

    return (
      <React.Fragment>
        <PageHelmet {...pickWithValues(pageHeader)} />
        <CssBaseline/>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            style={topStyle}
            elevation={validElevationMap[top.elevation]}
            className={classes.appBar}
          >
            <Toolbar>
              {listNavigationElement && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={this.handleDrawerOpenClick}
                  className={classes.menuButton}
                >
                  <MenuIcon/>
                </IconButton>
              )}
              <TopNavigation
                titleElement={
                  topTitle.text && (
                    <Typography {...pickWithValues(topTitle)} />
                  )
                }
                {...pickWithValues(topNavigation)}
                onItemClick={this.handleTopNavigationItemClick}
              />
            </Toolbar>
          </AppBar>
          {listNavigationElement && (
            <Hidden smUp implementation="js">
              <Drawer
                className={classes.drawer}
                variant="temporary"
                style={{ width: leftDrawer.width }}
                open={leftDrawerOpen}
                anchor="left"
                PaperProps={{ style: { width: leftDrawer.width } }}
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
          )}
          {bottomElement}
          {listNavigationElement && (
            <Hidden xsDown implementation="js">
              <Drawer
                className={classes.drawer}
                variant="permanent"
                style={{ width: leftDrawer.width }}
                PaperProps={{ style: { width: leftDrawer.width } }}
              >
                <div className={classes.toolbar}/>
                {listNavigationElement}
              </Drawer>
            </Hidden>
          )}
          <main className={classes.content} style={mainStyle}>
            <div className={classes.toolbar}/>
            <div className={classes.mainContent}>
              <Container
                fixed={main.fixed}
                maxWidth={main.maxWidth}
                disableMaxWidth={main.disableMaxWidth}
              >
                <ContentGrid
                  alignContent="flex-start"
                  alignItems="stretch"
                  spacing={main.spacing}
                  cells={mainContent.cells}
                />
              </Container>
            </div>
            {mainFooter.showOnMobile
              ? footerElement
              : (
                <Hidden xsDown implementation="js">
                  {footerElement}
                </Hidden>
              )
            }
            {bottomElement && (
              <Hidden smUp implementation="js">
                <div className={classes.toolbar}/>
              </Hidden>
            )}
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
      text: 'Title',
      variant: 'h5'
    },
    elevation: '2',
    navigation: {
      menuLabel: 'Go To',
      size: 'medium',
      items: [
        { id: '0001', label: 'Nav 1' },
        { id: '0002', label: 'Nav 2', active: true },
        { id: '0003', label: 'Nav 3' }
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
            { id: 'leftNav11', primaryText: 'Child Nav 1' },
            { id: 'leftNav12', primaryText: 'Child Nav 2' }
          ]
        },
        { id: 'leftNav2', primaryText: 'Left Nav 2', selected: true },
        { id: 'leftNav3', primaryText: 'Left Nav 3' },
      ]
    }
  },
  main: {
    fixed: false,
    maxWidth: 'lg',
    disableMaxWidth: false,
    spacing: '0',
    content: {
      cells: [<span/>]
    }
  },
  bottom: {
    navigation: {
      showLabels: true,
    }
  }
};

export default withStyles(styles, { withTheme: true })(PageFrameWithDrawer);
