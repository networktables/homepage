import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Image,
  Button
} from 'semantic-ui-react';

class OverviewButton extends Component {
  render() {
    const {
      heading,
      subHeading,
      link,
      image
    } = this.props;

    return (
      <div>
        <Link to={link}>
          <Header as='h2' icon textAlign='center' style={{color: '#fff'}}>
              <Image centered size='big' src={image} />
              <Header.Content>{heading}</Header.Content>
              <Header.Subheader style={{color: '#fff'}}>
                {subHeading}
              </Header.Subheader>
            <Button color='orange'>Bekijk meer</Button>
          </Header>
        </Link>
      </div>
    );
  }
}

OverviewButton.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default OverviewButton;
