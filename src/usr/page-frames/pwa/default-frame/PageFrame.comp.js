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
import { PageFrameTypes } from './PageFrame.props';

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
});

class PageFrame extends React.Component {
  constructor(props) {
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

  render() {
    const { classes, drawer, toolbar } = this.props;
    const { drawerWidth, drawerContent } = drawer;
    const { toolbarTitle, toolbarTitleVariant, elevation } = toolbar;
    const { isMobileDrawerOpen } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={elevation ? Number(elevation): 3}
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
              <MenuIcon />
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
            open={ isMobileDrawerOpen }
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
            <div className={classes.toolbar} />
            {drawerContent}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    );
  }
}

PageFrame.propTypes = PageFrameTypes;

PageFrame.defaultProps = {
  drawer: {
    drawerWidth: '250px',
    drawerContent: <div>Drawer</div>,
  },
  toolbar: {
    toolbarTitle: 'Some Title Here',
    toolbarTitleVariant: 'h6',
    elevation: '3'
  }
  // data: {
  //   title: 'Empty Title Value',
  //   placeholder: 'Enter text',
  //   inputText: '',
  //   inputObject: {},
  //   inputArray: []
  // },
  // cells: [<div>Placeholder</div>],
  // onInputTextChange: () => {
  //   console.info('PageFrame.onInputTextChange is not set');
  // },
  // onSubmit: () => {
  //   console.info('PageFrame.onSubmit is not set');
  // }
};

export default withStyles(styles)(PageFrame);
