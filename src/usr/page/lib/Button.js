import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ButtonMUI from '@material-ui/core/Button';
import MenuItemMUI from '@material-ui/core/MenuItem';
import MenuMUI from '@material-ui/core/Menu';
import pickWithValues from '../utils/pickWithValues';
import ButtonCircularProgress from './ButtonCircularProgress';

const useStyles = makeStyles(theme => ({
  button: {
    position: 'relative',
  },
}));

const Button = props => {
  const {
    className,
    label,
    color,
    variant,
    disabled,
    endIcon,
    startIcon,
    size,
    fullWidth,
    href,
    loading,
    menu,
    byId
  } = props;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleButtonClick = e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    props.onClick();
  };

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = id => e => {
    setAnchorEl(null);
    props.onMenuItemClick({id});
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  let menuItems = [];
  if (menu && menu.length > 0) {
    let disabledById = {};
    let selectedById = {};
    if (byId && byId.disabledMenuIds && byId.disabledMenuIds.length > 0) {
      disabledById = byId.disabledMenuIds.reduce((acc, id) => {acc[id] = true; return acc}, disabledById);
    }
    if (byId && byId.selectedMenuIds && byId.selectedMenuIds.length > 0) {
      selectedById = byId.selectedMenuIds.reduce((acc, id) => {acc[id] = true; return acc}, selectedById);
    }
    for (let i = 0; i < menu.length; i++) {
      menuItems.push(
        <MenuItemMUI
          key={`menuItem${i}`}
          disabled={disabledById[menu[i].id]}
          selected={selectedById[menu[i].id]}
          onClick={handleMenuItemClick(menu[i].id)}
        >
          {menu[i].label}
        </MenuItemMUI>
      )
    }
  }

  const muiButtonProps = pickWithValues({ variant, color, disabled, size, fullWidth, href });
  if (startIcon) {
    muiButtonProps.startIcon = startIcon;
  }
  if (endIcon) {
    muiButtonProps.endIcon = endIcon;
  }
  if (loading) {
    muiButtonProps.disabled = true;
  }
  const buttonElement = (
    <ButtonMUI
      className={`${className} ${classes.button}`}
      {...muiButtonProps}
      onClick={handleButtonClick}
    >
      {label}
      {loading && (
        <ButtonCircularProgress size={size} />
      )}
    </ButtonMUI>
  );
  if (menuItems.length > 0) {
    return (
      <React.Fragment>
        {buttonElement}
        <MenuMUI
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {menuItems}
        </MenuMUI>
      </React.Fragment>
    );
  } else {
    return buttonElement;
  }
};

Button.propTypes = {
  /**
   * Button label text
   */
  label: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An element placed after the button label.
   */
  endIcon: PropTypes.node,
  /**
   * An element placed before the button label.
   */
  startIcon: PropTypes.node,
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /**
   * Set the menu items props by their ids
   */
  byId: PropTypes.shape({
    /**
     * Selected menu items by id
     */
    selectedMenuIds: PropTypes.arrayOf(PropTypes.string),
    /**
     * Disabled menu items by id
     */
    disabledMenuIds: PropTypes.arrayOf(PropTypes.string),
  }),
  menu: PropTypes.arrayOf(PropTypes.shape({
    /**
     * A menu item id
     */
    id: PropTypes.string,
    /**
     * A menu item label
     */
    label: PropTypes.string,
  })),
  /*
   * Triggered when the user click on the button
   *
   */
  onClick: PropTypes.func,
  /*
   * Triggered when the user click on the menu item
   *
   */
  onMenuItemClick: PropTypes.func
};

Button.defaultProps = {
  label: 'Button',
  variant: 'contained',
  menu: [],
  onClick: () => {
    console.info('Button.onClick is not set');
  }
};

export default Button;
