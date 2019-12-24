import React from 'react';
import BottomNavigationMUI from '@material-ui/core/BottomNavigation';
import BottomNavigationActionMUI from '@material-ui/core/BottomNavigationAction';
import { BottomNavigationWithActionsTypes } from './BottomNavigationWithActions.props';

class BottomNavigationWithActions extends React.Component {

  handleChange = (e, value) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onClick, actions } = this.props;
    onClick({
      selectedAction: actions.find(i => i.id === value),
    });
  };

  render() {
    const { activeActionId, actions, showLabels, icons } = this.props;
    if (actions) {
      const actionsElements = [];
      if (actions && actions.length > 0) {
        for (let i = 0; i < actions.length; i++) {
          if (actions[i]) {
            const { id, label, iconIndex } = actions[i];
            const icon = icons && icons.length > 0 ? icons[iconIndex] : null;
            actionsElements.push(
              <BottomNavigationActionMUI
                key={`navigationAction${i}`}
                label={label}
                value={id}
                icon={icon}
              />
            );
          }
        }
      }
      return (
        <BottomNavigationMUI
          showLabels={showLabels}
          value={activeActionId}
          onChange={this.handleChange}
        >
          {actionsElements}
        </BottomNavigationMUI>
      );
    }
    return null;
  }
}

BottomNavigationWithActions.propTypes = BottomNavigationWithActionsTypes;

BottomNavigationWithActions.defaultProps = {
  showLabels: true,
  actions: [
    {
      id: 'navItem1',
      label: 'Nav Item 1',
    },
    {
      id: 'navItem2',
      label: 'Nav Item 2',
    },
    {
      id: 'navItem3',
      label: 'Nav Item 3',
    },
  ],
  onClick: () => {
    console.info('BottomNavigationWithActions.onClick is not set');
  }
};

export default BottomNavigationWithActions;
