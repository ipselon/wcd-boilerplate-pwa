export default {
  'start': [{
    'type': 'component',
    'props': { 'componentName': 'usr.probes.TestForm', 'componentInstance': 'mainForm' },
    'events': [{
      'name': 'onSubmit',
      'targets': [{
        'type': 'component',
        'props': {
          'forwardPath': 'tests/test-1',
          'transformScript': 'return function (data) { \n  return { title: data.enteredText }; \n}'
        },
        'events': [{
          'name': 'queryParams',
          'targets': [{
            'type': 'component',
            'props': {
              'componentName': 'usr.probes.TestForm',
              'componentInstance': 'testForm',
              'populatePath': 'tests/test-1',
              'propertyName': 'data',
              'transformScript': 'return function (data) { return data; }'
            }
          }]
        }]
      }]
    }]
  }],
  'tests': {
    'test-1': [{
      'type': 'component',
      'props': { 'componentName': 'applicationStartWrapper', 'componentInstance': 'wrapperInstance' }
    }]
  }
};
