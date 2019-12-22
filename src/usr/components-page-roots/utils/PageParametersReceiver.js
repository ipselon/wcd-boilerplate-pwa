import React from 'react';
import { PageParametersReceiverTypes } from './PageParametersReceiver.props';

class PageParametersReceiver extends React.Component {
  componentDidMount () {
    const { pageParameters, onPageParametersReceived } = this.props;
    if (pageParameters) {
      onPageParametersReceived({pageParameters});
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { pageParameters, onPageParametersReceived } = this.props;
    if (pageParameters && pageParameters !== prevProps.pageParameters) {
      onPageParametersReceived({pageParameters});
    }
  }

  render() {
    return <span />;
  }
}

PageParametersReceiver.propTypes = PageParametersReceiverTypes;

PageParametersReceiver.defaultProps = {
  pageParameters: null,
  onPageParametersReceived: () => {},
};

export default PageParametersReceiver;
