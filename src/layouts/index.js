import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  Container,
  Divider,
  Grid,
  Header as headers,
  List,
  Segment,
} from 'semantic-ui-react';

import Header from '../components/header';
import ResponsiveContainer from '../components/ResponsiveContainer';
import './index.css'

import { I18n } from 'react-i18next'

import i18n from '../components/i18n'
import 'semantic-ui-css/semantic.min.css';

class Layout extends React.Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, {i18n}) => (
            <div>
              <Helmet
                title={this.props.data.site.siteMetadata.title}
                meta={[
                  {name: 'description', content: 'Sample'},
                  {name: 'keywords', content: 'sample, something'},
                ]}
              />
              <Header siteTitle={this.props.data.site.siteMetadata.title}/>
              <React.Fragment>
                <ResponsiveContainer>
                  <Segment style={{ padding: '3em 0em' }} vertical>
                    <Container text>
                      <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '0em 0em 3em', textTransform: 'uppercase' }}
                      >
                        Networktables
                      </Divider>
                    </Container>
                  </Segment>

                  <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                      <Grid divided inverted stackable>
                        <Grid.Row>
                          <Grid.Column width={3}>
                            <Headers inverted as='h4' content='About' />
                            <List link inverted>
                              <List.Item as='a'>Sitemap</List.Item>
                              <List.Item as='a'>Contact Us</List.Item>
                              <List.Item as='a'>Religious Ceremonies</List.Item>
                              <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                          </Grid.Column>
                          <Grid.Column width={3}>
                            <Headers inverted as='h4' content='Services' />
                            <List link inverted>
                              <List.Item as='a'>Banana Pre-Order</List.Item>
                              <List.Item as='a'>DNA FAQ</List.Item>
                              <List.Item as='a'>How To Access</List.Item>
                              <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                          </Grid.Column>
                          <Grid.Column width={7}>
                            <Headers as='h4' inverted>
                              Footer Header
                            </Headers>
                            <p>
                              Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Container>
                  </Segment>
                </ResponsiveContainer>
              </React.Fragment>
            </div>
          )
        }
      </I18n>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
