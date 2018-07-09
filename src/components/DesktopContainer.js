import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Image,
  Grid,
  Header,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import ModalVideo from 'react-modal-video'
import logo from '../assets/images/logo.png';
import screen from '../assets/images/screen.png';
import Link from 'gatsby-link';

class DesktopContainer extends Component {
  constructor () {
    super();
    this.state = {
      fixed: false,
      isOpen: false
    };
    this.openModal = this.openModal.bind(this)
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  openModal () {
    this.setState({isOpen: true})
  }

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
            style={{ minHeight: 600, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <img src={logo} width="300" height="44" alt={'logo'} style={{marginTop: 40}}/>
                <Menu.Menu position='right'>
                <Menu.Item as='a' active>
                  <Link to={'/'}>Home</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Link to={'solutions'}>Solutions</Link>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Link to={'pricing'}>
                    Pricing
                  </Link>
                </Menu.Item>
                <Menu.Item as='a'>
                  <Link to={'docs'}>
                    Docs
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Button as='a' inverted={!fixed}>
                    Request a demo
                  </Button>
                </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>

            <Container text>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column textAlign='left'>
                    <Header as='h1' style={{color: '#fff', marginTop: 40}}>
                      We help event organizers to save time & attendees to make valuable connections
                      <Header.Subheader style={{color: '#fff', marginTop: 40}}>Attendees see an overview of roundtables, workshops and available meeting partners and on1 meetings with 1 click. Say goodbye to event app downloads, time consuming processes, and manual work.</Header.Subheader>
                      <Header.Subheader onClick={this.openModal} as='a' style={{color: '#fff', marginTop: 40}}>Play video</Header.Subheader>
                      <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='wiBhFAcGO4M' onClose={() => this.setState({isOpen: false})} />
                    </Header>
                  </Grid.Column>
                  <Grid.Column textAlign='center'>
                    <Image
                      style={{marginTop: 40}}
                      src={screen}
                      alt={'demo'}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export default DesktopContainer;
