import get from 'lodash/get';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLessIcon from '../icons/material/ExpandLessIcon';
import ExpandMoreIcon from '../icons/material/ExpandMoreIcon';
import pickWithValues from '../utils/pickWithValues';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class ListNavigation extends React.Component {

  handleItemClick = (item) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onItemClick, items } = this.props;
    if (onItemClick) {
      onItemClick({id: item.id, href: item.href, items});
    }
  };

  handleItemToggle = (item) => (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { onItemToggleExpand, items } = this.props;
    if (onItemToggleExpand) {
      onItemToggleExpand({ id: item.id, items });
    }
  };

  renderList = (listItems, level = 0) => {
    const { classes, icons, dense } = this.props;
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
            selected,
            expanded,
            divider,
            iconIndex
          } = item;
          const listItemProperties = pickWithValues({ disabled, selected, dense, divider });
          const uniqueKey = id ? `${id}.${idx}.${level}` : `listItem${idx}.${level}`;
          const iconElement = get(icons, `[${iconIndex}]`);
          if (childrenItems && childrenItems.length > 0) {
            resultElementList.push(
              <ListItem
                key={uniqueKey}
                button={true}
                {...listItemProperties}
                onClick={this.handleItemToggle(item)}
              >
                {iconElement && (
                  <ListItemIcon>
                    {iconElement}
                  </ListItemIcon>
                )}
                <ListItemText primary={primaryText} secondary={secondaryText} />
                {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </ListItem>
            );
            resultElementList.push(
              <Collapse
                key={`collapse.${uniqueKey}`}
                in={expanded}
                timeout="auto"
                unmountOnExit={true}
              >
                {this.renderList(childrenItems, level + 1)}
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
                {iconElement && (
                  <ListItemIcon>
                    {iconElement}
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
    const { items } = this.props;
    if (items) {
      return this.renderList(items);
    }
    return null;
  }
}

export default withStyles(styles)(ListNavigation);
