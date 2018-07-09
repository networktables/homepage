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
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

import ResponsiveContainer from '../components/ResponsiveContainer';
import '../layouts/index.css'

import { I18n } from 'react-i18next'

import i18n from '../components/i18n'
import 'semantic-ui-css/semantic.min.css';
import 'react-circular-progressbar/dist/styles.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import logo from '../assets/images/logo.png';

class Pricing extends React.Component {
  render() {
    return (
      <I18n ns="translations">
        {
          (t, {i18n}) => (
            <div>
              <ResponsiveContainer>
                <PricingTable  highlightColor='#1976D2'>
                  <PricingSlot  onClick={this.submit} buttonText='TRY IT FREE' title='FREE' priceText='$0/month'>
                    <PricingDetail> <b>15</b> projects</PricingDetail>
                    <PricingDetail> <b>5 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>5</b> users</PricingDetail>
                    <PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>
                  </PricingSlot>
                  <PricingSlot highlighted onClick={this.submit} buttonText='SIGN UP' title='BASIC' priceText='$24/month'>
                    <PricingDetail> <b>35</b> projects</PricingDetail>
                    <PricingDetail> <b>15 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                  </PricingSlot>
                  <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='PROFESSIONAL' priceText='$99/month'>
                    <PricingDetail> <b>100</b> projects</PricingDetail>
                    <PricingDetail> <b>30 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                  </PricingSlot>
                  <PricingSlot  onClick={this.submit} buttonText='SIGN UP' title='ENTERPRISE' priceText='$200/month'>
                    <PricingDetail> <b>Unlimited</b> projects</PricingDetail>
                    <PricingDetail> <b>75 GB</b> storage</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>Time tracking</b></PricingDetail>
                  </PricingSlot>
                </PricingTable>
                <Segment>
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

Pricing.propTypes = {
  children: PropTypes.func,
};

export default Pricing
