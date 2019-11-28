import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { ListWithItemsTypes } from './ListWithItems.props';

const styles = theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
});

class ListWithItems extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expandedById: {},
    };
  }

  handleItemClick = (listItem) => e => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.props.onItemClick({
      listItem
    });
  };

  handleItemToggle = (itemId) => (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const expandedById = {...this.state.expandedById};
    expandedById[itemId] = !expandedById[itemId];
    this.setState({
      expandedById
    });
  };

  renderList = (listItems, level = 0) => {
    const { classes } = this.props;
    const { expandedById } = this.state;
    const resultElementList = [];
    if (listItems && listItems.length > 0) {
      listItems.forEach((item, idx) => {
        if (item) {
          const {id, primaryText, secondaryText, href, children, metaData} = item;
          if (id) {
            let divider;
            if (metaData) {
              divider = metaData.divider;
            }
            if (children && children.length > 0) {
              resultElementList.push(
                <ListItem
                  key={id}
                  button={true}
                  onClick={this.handleItemToggle(id)}
                >
                  <ListItemText primary={primaryText} secondary={secondaryText} />
                  {expandedById[id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
              );
              resultElementList.push(
                <Collapse
                  in={expandedById[id]}
                  timeout="auto"
                  unmountOnExit={true}
                >
                  {this.renderList(children, level + 1)}
                </Collapse>
              )
            } else {
              resultElementList.push(
                <ListItem
                  key={id}
                  button={!href}
                  divider={divider}
                  onClick={this.handleItemClick(item)}
                >
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
              )
            }
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
    const { listItems } = this.props;
    return this.renderList(listItems);
  }
}

ListWithItems.propTypes = ListWithItemsTypes;

ListWithItems.defaultProps = {
  listItems: [
    {
      id: '00001',
      primaryText: 'List Item 00001',
      secondaryText: 'Subtext 00001',
      metaData: {
        divider: true,
      }
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
  icons: [],
  onItemClick: () => {
    console.info('ListWithItems.onItemClick is not set');
  }
};

export default withStyles(styles)(ListWithItems);
