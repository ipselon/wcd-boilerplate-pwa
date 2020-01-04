import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from './icons/material/ExpandLessIcon';
import ExpandMoreIcon from './icons/material/ExpandMoreIcon';
import pickWithValues from './utils/pickWithValues';
import { ListWithItemsTypes } from './ListWithItems.props';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class ListWithItems extends React.Component {

  handleItemClick = (item) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onItemClick } = this.props;
    onItemClick(item);
  };

  handleItemToggle = (item) => (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onItemToggleExpand, expandedMap } = this.props;
    onItemToggleExpand({
      toggledItem: item,
      expandedMap,
    });
  };

  renderList = (listItems, selectedId, expandedMap = {}, level = 0) => {
    const { classes, icons, dense, disableGutters } = this.props;
    const resultElementList = [];
    if (listItems && listItems.length > 0) {
      listItems.forEach((item, idx) => {
        if (item) {
          const {
            id,
            primaryText,
            secondaryText,
            href,
            childrenItems,
            disabled,
            divider,
            iconIndex
          } = item;
          const listItemProperties = pickWithValues({ disabled, dense, disableGutters, divider });
          listItemProperties.selected = id && selectedId && id === selectedId;
          const uniqueKey = id ? `${id}.${idx}.${level}` : `listItem${idx}.${level}`;
          if (childrenItems && childrenItems.length > 0) {
            resultElementList.push(
              <ListItem
                key={uniqueKey}
                button={true}
                {...listItemProperties}
                onClick={this.handleItemToggle(item)}
              >
                {iconIndex >= 0 && icons[iconIndex] && (
                  <ListItemIcon>
                    {icons[iconIndex]}
                  </ListItemIcon>
                )}
                <ListItemText primary={primaryText} secondary={secondaryText} />
                {expandedMap[id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
            );
            resultElementList.push(
              <Collapse
                key={`collapse.${uniqueKey}`}
                in={expandedMap[id]}
                timeout="auto"
                unmountOnExit={true}
              >
                {this.renderList(childrenItems, selectedId, expandedMap, level + 1)}
              </Collapse>
            );
          } else {
            resultElementList.push(
              <ListItem
                key={uniqueKey}
                button={!href}
                {...listItemProperties}
                onClick={this.handleItemClick(item)}
              >
                {iconIndex >= 0 && icons[iconIndex] && (
                  <ListItemIcon>
                    {icons[iconIndex]}
                  </ListItemIcon>
                )}
                {href
                  ? (
                    <ListItemText
                      primary={
                        <a
                          href={href}
                          onClick={this.handleItemClick(item)}
                        >
                          {primaryText}
                        </a>
                      }
                      secondary={secondaryText}
                    />
                  )
                  : (
                    <ListItemText
                      primary={primaryText}
                      secondary={secondaryText}
                    />
                  )
                }
              </ListItem>
            );
          }
        }
      });
    }
    return (
      <List
        component="div"
        className={level > 0 ? classes.nested : ''}
        disablePadding={true}
      >
        {resultElementList}
      </List>
    );
  };

  render () {
    const { items, selectedId, expandedMap } = this.props;
    if (items) {
      return this.renderList(items, selectedId, expandedMap);
    }
    return null;
  }
}

ListWithItems.propTypes = ListWithItemsTypes;

ListWithItems.defaultProps = {
  expandedMap: {},
  items: [
    {
      id: '00001',
      primaryText: 'List Item 00001',
      secondaryText: 'Subtext 00001',
      divider: true,
    },
    {
      id: '00002',
      primaryText: 'List Item 00002',
      secondaryText: 'Subtext 00002'
    },
    {
      id: '00003',
      primaryText: 'List Item 00003',
      secondaryText: 'Subtext 00003',
    },
    {
      id: '00004',
      primaryText: 'List Item 00004',
      secondaryText: 'Subtext 00004'
    }
  ],
  onItemClick: () => {
    console.info('ListWithItems.onItemClick is not set');
  },
  onItemToggleExpand: () => {
    console.info('ListWithItems.onItemToggleExpand is not set');
  },
};

export default withStyles(styles)(ListWithItems);
