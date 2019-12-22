import React from 'react';
import { Helmet } from 'react-helmet';
import { PageHelmetTypes } from './PageHelmet.props';
import pickWithValues from '../common-props/utils/pickWithValues';

class PageHelmet extends React.Component {
  render () {
    const { title, meta } = this.props;
    const metaTags = [];
    if (meta && meta.length > 0) {
      for (let i = 0; i < meta.length; i++) {
        metaTags.push(
          <meta key={`meta${i}`} {...pickWithValues(meta[i])} />
        );
      }
    }
    return (
      <Helmet>
        <title>{title}</title>
        {metaTags}
      </Helmet>
    );
  }
}

PageHelmet.propTypes = PageHelmetTypes;

PageHelmet.defaultProps = {
  title: 'New Page',
};

export default PageHelmet;
