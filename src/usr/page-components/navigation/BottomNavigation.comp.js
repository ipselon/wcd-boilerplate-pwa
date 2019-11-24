import React from 'react';
import BottomNavigationMUI from '@material-ui/core/BottomNavigation';
import BottomNavigationActionMUI from '@material-ui/core/BottomNavigationAction';
import { BottomNavigationTypes } from './BottomNavigation.props';

class BottomNavigation extends React.Component {

  handleChange = (e, value) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onChange({
      activeNavigationKey: value,
    });
  };

  render() {
    const { activeNavigationKey, navigationItems, showLabels } = this.props;
    return (
      <BottomNavigationMUI
        showLabels={showLabels}
        value={activeNavigationKey}
        onChange={this.handleChange}
      >
        {navigationItems && navigationItems.length > 0 &&
          navigationItems.map((navigationItem, idx) => {
            return (
              <BottomNavigationActionMUI
                key={`navigationItem${idx}`}
                label={navigationItem.label}
                value={navigationItem.navigationKey}
                icon={navigationItem.icon}
              />
            );
          })
        }
      </BottomNavigationMUI>
    );
  }
}

BottomNavigation.propTypes = BottomNavigationTypes;

BottomNavigation.defaultProps = {
  showLabels: true,
  activeNavigationKey: 'navItem1',
  navigationItems: [
    {
      navigationKey: 'navItem1',
      label: 'Nav Item 1',
      icon: <span />
    },
    {
      navigationKey: 'navItem2',
      label: 'Nav Item 2',
      icon: <span />
    },
    {
      navigationKey: 'navItem3',
      label: 'Nav Item 3',
      icon: <span />
    },
  ],
  onChange: () => {
    console.info('BottomNavigation.onChange is not set');
  }
};

export default BottomNavigation;
