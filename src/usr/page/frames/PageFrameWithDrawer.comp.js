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

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
    const { classes, drawer, toolbar, mainArea, hiddenCells } = this.props;
    const { drawerWidth, drawerContent } = drawer;
    const { toolbarTitle, toolbarTitleVariant, elevation } = toolbar;
    const { cells } = mainArea;
    const { isMobileDrawerOpen } = this.state;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <CssBaseline/>
          <AppBar
            position="fixed"
            elevation={elevation ? Number(elevation) : 3}
            className={classes.appBar}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon/>
              </IconButton>
              <Typography variant={toolbarTitleVariant} noWrap>
                {toolbarTitle}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden smUp implementation="css">
            <Drawer
              className={classes.drawer}
              variant="temporary"
              style={{ width: drawerWidth }}
              open={isMobileDrawerOpen}
              anchor="left"
              PaperProps={{ style: { width: drawerWidth } }}
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
              {drawerContent}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              className={classes.drawer}
              variant="permanent"
              style={{ width: drawerWidth }}
              PaperProps={{ style: { width: drawerWidth } }}
            >
              <div className={classes.toolbar}/>
              {drawerContent}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <div className={classes.toolbar}/>
            {cells}
          </main>
        </div>
        <div className={classes.hiddenArea}>
          {hiddenCells}
        </div>
      </React.Fragment>
    );
  }
}

PageFrameWithDrawer.propTypes = PageFrameWithDrawerTypes;

PageFrameWithDrawer.defaultProps = {
  drawer: {
    drawerWidth: '250px',
    drawerContent: <div>Drawer</div>,
  },
  toolbar: {
    toolbarTitle: 'Some Title Here',
    toolbarTitleVariant: 'h6',
    elevation: '3'
  },
  mainArea: {
    cells: []
  },
  hiddenCells: [],
};

export default withStyles(styles)(PageFrameWithDrawer);
