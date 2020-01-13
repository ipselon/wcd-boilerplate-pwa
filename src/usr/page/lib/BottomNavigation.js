import React from 'react';
import BottomNavigationMUI from '@material-ui/core/BottomNavigation';
import BottomNavigationActionMUI from '@material-ui/core/BottomNavigationAction';

class BottomNavigation extends React.Component {

  handleChange = (e, value) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onClick, items } = this.props;
    onClick({
      id: value,
      items,
    });
  };

  render() {
    const { items, showLabels, icons } = this.props;
    if (items) {
      const actionsElements = [];
      let activeActionId;
      if (items && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
          if (items[i]) {
            const { id, label, active, iconIndex } = items[i];
            const icon = icons && icons.length > 0 ? icons[iconIndex] : null;
            if (active) {
              activeActionId = id;
            }
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

export default BottomNavigation;
