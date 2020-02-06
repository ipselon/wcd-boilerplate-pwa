export default {
  'test-2': [{
    'type': 'component',
    'props': { 'componentName': 'usr.page.PageFrameWithDrawer', 'componentInstance': 'pageFrameWithDrawer' },
    'events': [{
      'name': 'onToggleDrawer',
      'targets': [{
        'type': 'userFunction',
        'props': { 'functionName': 'usr.page.PageFrameWithDrawer.togglePageFrameDrawer' },
        'events': [{
          'name': 'properties',
          'targets': [{
            'type': 'component',
            'props': { 'componentName': 'usr.page.PageFrameWithDrawer', 'componentInstance': 'pageFrameWithDrawer' }
          }]
        }]
      }]
    }]
  }],
  'test': [{
    'type': 'component',
    'props': { 'componentName': 'usr.page.ListNavigation', 'componentInstance': 'listNavigation' },
    'events': [{
      'name': 'onListNavigationItemClick',
      'targets': [{
        'type': 'userFunction',
        'props': { 'functionName': 'usr.page.PageFrameWithDrawer.closePageFrameDrawer' },
        'events': [{
          'name': 'properties',
          'targets': [{
            'type': 'component',
            'props': { 'componentName': 'usr.page.PageFrameWithDrawer', 'componentInstance': 'pageFrameWithDrawer' }
          }]
        }]
      }]
    }]
  }]
};
