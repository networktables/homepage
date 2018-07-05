import React, { Component } from 'react'
import {
  Button,
  Container,
  Image,
  Icon,
} from 'semantic-ui-react'
import { translate } from "react-i18next";
import header from '../assets/images/logo.png';


class Header extends Component {
  render() {
    const {t, siteTitle} = this.props;
    return (
      <Container text>
        <Image src={header} size='small' />
        <Button primary size='huge'>
          Get Started
          <Icon name='right arrow' />
        </Button>
      </Container>
    );
  }
}

export default translate("Header")(Header);
