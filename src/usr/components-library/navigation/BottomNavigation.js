import React from 'react';
import BottomNavigationMUI from '@material-ui/core/BottomNavigation';
import BottomNavigationActionMUI from '@material-ui/core/BottomNavigationAction';
import { BottomNavigationTypes } from './BottomNavigation.props';

class BottomNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeNavigationKeyLocal: this.props.activeNavigationKey,
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { activeNavigationKey } = this.props;
    const { activeNavigationKeyLocal } = this.state;
    if (activeNavigationKey !== prevProps.activeNavigationKey && activeNavigationKey !== activeNavigationKeyLocal) {
      this.setState({ activeNavigationKeyLocal: activeNavigationKey });
    }
  }

  handleChange = (e, value) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({
      activeNavigationKeyLocal: value,
    });
    this.props.onChange({
      activeNavigationKey: value,
    });
  };

  render() {
    const { navigationItems, showLabels, icons } = this.props;
    const { activeNavigationKeyLocal } = this.state;
    return (
      <BottomNavigationMUI
        showLabels={showLabels}
        value={activeNavigationKeyLocal}
        onChange={this.handleChange}
      >
        {navigationItems && navigationItems.length > 0 &&
          navigationItems.map((navigationItem, idx) => {
            const icon = icons && icons.length > 0 ? icons[navigationItem.iconIndex] : null;
            return (
              <BottomNavigationActionMUI
                key={`navigationItem${idx}`}
                label={navigationItem.label}
                value={navigationItem.navigationKey}
                icon={icon}
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
    },
    {
      navigationKey: 'navItem2',
      label: 'Nav Item 2',
    },
    {
      navigationKey: 'navItem3',
      label: 'Nav Item 3',
    },
  ],
  onChange: () => {
    console.info('BottomNavigation.onChange is not set');
  }
};

export default BottomNavigation;
