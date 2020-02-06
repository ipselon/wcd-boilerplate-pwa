export default {
  'usr.page.PageFrameWithDrawer_pageFrameWithDrawer': {
    'type': 'usr.page.PageFrameWithDrawer',
    'instance': 'pageFrameWithDrawer',
    'props': {
      'bottomNavigation': {
        'instanceRef': 'usr.page.BottomNavigation_bottomNavigation',
      },
      'hidden': [],
      'left': { 'drawer': {} },
      'leftNavigation': {
        'instanceRef': 'usr.page.ListNavigation_listNavigation',
      },
      'main': { 'palette': { 'backgroundColor': {}, 'color': {} } },
      'mainContentCells': [{
        'instanceRef': 'usr.form.Button_button',
      }, {
        'instanceRef': 'usr.form.NumberField_numberField',
      }, {
        'instanceRef': 'usr.form.RadioGroupWithItems_radioGroupWithItems',
      }],
      'mainFooterCells': [],
      'pageHeader': { 'meta': [] },
      'top': { 'palette': { 'backgroundColor': {}, 'color': {} }, 'title': {} },
      'topNavigation': {
        'instanceRef': 'usr.page.TopNavigation_topNavigation',
      },
      'userDetails': { 'userMetadata': {} }
    }
  },
  'usr.page.BottomNavigation_bottomNavigation': {
    'type': 'usr.page.BottomNavigation',
    'instance': 'bottomNavigation',
    'props': {
      'icons': [],
      'properties': {
        'items': [{ 'active': true, 'id': 'navItem1', 'label': 'Nav Item 1' }, {
          'id': 'navItem2',
          'label': 'Nav Item 2'
        }, { 'id': 'navItem3', 'label': 'Nav Item 3' }], 'showLabels': true
      }
    }
  },
  'usr.page.ListNavigation_listNavigation': {
    'type': 'usr.page.ListNavigation',
    'instance': 'listNavigation',
    'props': {
      'icons': [],
      'properties': {
        'dense': false,
        'items': [{
          'childrenItems': [],
          'divider': false,
          'primaryText': 'List Item 00001',
          'secondaryText': 'Subtext 00001',
          'url': '/page1'
        }, {
          'childrenItems': [{ 'primaryText': 'Go To Sub Page', 'url': '/sub/page' }],
          'expanded': false,
          'primaryText': 'List Item 00002',
          'secondaryText': 'Subtext 00002',
          'url': '/page2'
        }, {
          'childrenItems': [],
          'primaryText': 'List Item 00003',
          'secondaryText': 'Subtext 00003',
          'url': '/page3'
        }, {
          'childrenItems': [],
          'primaryText': 'List Item 00004',
          'secondaryText': 'Subtext 00004',
          'url': '/page4'
        }]
      }
    }
  },
  'usr.form.Button_button': {
    'type': 'usr.form.Button',
    'instance': 'button',
    'props': {
      'byId': { 'disabledMenuIds': [], 'selectedMenuIds': [] },
      'endIcon': null,
      'label': 'Button',
      'menu': [],
      'startIcon': null,
      'variant': 'contained'
    }
  },
  'usr.form.NumberField_numberField': {
    'type': 'usr.form.NumberField',
    'instance': 'numberField',
    'props': {
      'debounceDelay': 300,
      'formControl': { 'endAdornment': null, 'margin': 'none', 'startAdornment': null },
      'inputControl': {}
    }
  },
  'usr.form.RadioGroupWithItems_radioGroupWithItems': {
    'type': 'usr.form.RadioGroupWithItems',
    'instance': 'radioGroupWithItems',
    'props': {
      'items': [{ 'color': 'default', 'label': 'Orange', 'value': 'orange' }, {
        'color': 'default',
        'label': 'Green',
        'value': 'green'
      }, { 'color': 'default', 'label': 'Blue', 'value': 'blue' }], 'row': true, 'selectedValue': 'Green'
    }
  },
  'usr.page.TopNavigation_topNavigation': {
    'type': 'usr.page.TopNavigation',
    'instance': 'topNavigation',
    'props': {
      'properties': {
        'items': [{ 'active': true, 'label': 'Home', 'url': '/' }, {
          'label': 'About',
          'url': '/about'
        }], 'menuLabel': 'Go To', 'size': 'medium'
      }
    }
  }
}