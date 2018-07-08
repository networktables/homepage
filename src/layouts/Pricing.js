import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {
  Container,
  Divider,
  Button,
  Grid,
  Image,
  Header as Headers,
  List,
  Item,
  Segment,
} from 'semantic-ui-react';

import CircularProgressbar from 'react-circular-progressbar';

import ResponsiveContainer from '../components/ResponsiveContainer';
import './index.css'

import { I18n } from 'react-i18next'

import i18n from '../components/i18n'
import 'semantic-ui-css/semantic.min.css';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import logo from '../assets/images/logo.png';

class Solutions extends React.Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, {i18n}) => (
            <div>
              <ResponsiveContainer>
                <Segment style={{ padding: '3em 0em' }} vertical>
                  <Container>
                    <Divider
                      as='h4'
                      className='header'
                      horizontal
                      style={{ margin: '0em 0em 3em', textTransform: 'uppercase' }}
                    >
                      Do you regonize any of these problems?
                    </Divider>
                    <Item.Group divided>
                      <Grid columns={2}>
                        <Grid.Row>
                          <Grid.Column textAlign='center'>
                            <Item>
                              <Item.Image size='huge' avatar src='https://placekitten.com/150/150' />
                              <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Grid.Column>
                          <Grid.Column textAlign='center'>
                            <Item>
                              <Item.Image size='huge' avatar src='https://placekitten.com/150/150' />
                              <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column textAlign='center'>
                            <Item>
                              <Item.Image size='huge' avatar src='https://placekitten.com/150/150' />
                                <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Grid.Column>
                          <Grid.Column textAlign='center'>
                            <Item>
                              <Item.Image size='huge' avatar src='https://placekitten.com/150/150' />
                              <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column textAlign='center'>
                            <Item>
                              <Item.Image size='huge' avatar src='https://placekitten.com/150/150' />
                              <Item.Content>
                              <Item.Header as='a'>Cute Dog</Item.Header>
                              <Item.Description>
                                <p>Many people also have their own barometers for what makes a cute dog.</p>
                              </Item.Description>
                            </Item.Content>
                          </Item>
                          </Grid.Column>
                          <Grid.Column textAlign='center'>
                            <Item>
                              <Item.Image size='huge' avatar src='https://placekitten.com/150/150' />
                              <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>
                                  <p>Many people also have their own barometers for what makes a cute dog.</p>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Item.Group>
                    <Divider
                      as='h4'
                      className='header'
                      horizontal
                      style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                      What we can offer?
                    </Divider>
                    <Container text>
                      <Grid columns={3}>
                        <Grid.Row>
                          <Grid.Column>
                            <CircularProgressbar
                              percentage='69'
                              text='69%'
                              initialAnimation={true}
                            />
                            <h2>De Finibus Bonorum &amp; Malorum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </Grid.Column>
                          <Grid.Column>
                            <CircularProgressbar
                              percentage='30'
                              text='30%'
                              initialAnimation
                            />
                            <h2>De Finibus Bonorum &amp; Malorum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </Grid.Column>
                          <Grid.Column>
                            <CircularProgressbar
                              percentage='300'
                              text='300%'
                              initialAnimation
                            />
                            <h2>De Finibus Bonorum &amp; Malorum</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Container>
                    <Divider
                      as='h4'
                      className='header'
                      horizontal
                      style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                      How do we do this?
                    </Divider>
                    <Grid container stackable verticalAlign='middle'>
                      <Grid.Row>
                        <Grid.Column width={8}>
                          <Headers as='h3' style={{ fontSize: '2em' }}>
                            We Help Companies and Companions
                          </Headers>
                          <p style={{ fontSize: '1.33em' }}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
                          </p>
                          <Headers as='h3' style={{ fontSize: '2em' }}>
                            We Make Bananas That Can Dance
                          </Headers>
                          <p style={{ fontSize: '1.33em' }}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                          </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                          <Image bordered rounded size='large' src='https://placekitten.com/400/300' />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column textAlign='center'>
                          <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Container>
                </Segment>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                  <Container>
                    <Button size='huge'>Check Them Out</Button>
                  </Container>
                  <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                  >
                    For who do we do this?
                  </Divider>
                  <Carousel
                    slidesPerPage={5}
                    slidesPerScroll={2}
                    animationSpeed={1500}
                    autoPlay={3000}
                    offset={50}
                    itemWidth={250}
                    clickToChange
                    infinite
                    centered
                  >
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                  <img src={logo} />
                </Carousel>
                  <Container style={{ margin: '3em 0em' }}>
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
            </div>
          )
        }
      </I18n>
    );
  }
}

Solutions.propTypes = {
  children: PropTypes.func,
};

export default Solutions
