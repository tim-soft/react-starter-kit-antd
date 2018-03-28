/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import newsQuery from './news.graphql';
import s from './Home.css';
import { Button, Slider, Row, Col, Card, Icon, Steps } from 'antd';

const { Step } = Steps;

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      news: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          content: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  render() {
    const { data: { loading, reactjsGetAllNews } } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>

          <Card title="Modify theme in /src/components/antThemeVariables.scss!" style={{ margin: '20px 0 '}}>
            <Row style={{ margin: '20px 0 '}}>
              <Col span={12}>
                <Button type="primary">Ant Design Button</Button>
              </Col>
              <Col span={12}>
                <Button type="danger">Ant Design Button</Button>
              </Col>
            </Row>

            <Row style={{ margin: '20px 0 '}}>
              <Col span={12}>
                <Button type="primary">Ant Design Button</Button>
              </Col>
              <Col span={12}>
                <Button type="danger">Ant Design Button</Button>
              </Col>
            </Row>

            <Row style={{ margin: '20px 0 '}}>
              <Col style={{ margin: '20px 0 '}} span={24}>
                <Slider defaultValue={30} />
              </Col>

              <Col style={{ margin: '20px 0 '}} span={24}>
                <Steps current={1}>
                  <Step title="Finished" description="This is a description." />
                  <Step title="In Progress" description="This is a description." />
                  <Step title="Waiting" description="This is a description." />
                </Steps>
              </Col>
            </Row>
          </Card>

          <h1>React.js News</h1>
          {loading
            ? 'Loading...'
            : reactjsGetAllNews.map(item => (
                <article key={item.link} className={s.newsItem}>
                  <h1 className={s.newsTitle}>
                    <a href={item.link}>{item.title}</a>
                  </h1>
                  <div
                    className={s.newsDesc}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </article>
              ))}
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s), graphql(newsQuery))(Home);
