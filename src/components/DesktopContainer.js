import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Image,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Link from 'gatsby-link'

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            position='right'
          >
            <Container>
              <Link to="/page-2/">
                <Image
                  src='../assets/images/logo.png'
                  size='medium'
                />
              </Link>
            </Container>
            <Container>
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
