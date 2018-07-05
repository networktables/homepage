import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
  <Container fluid>
    <Image
       centered
       size='big'
       src={header}
       style={{
         fontSize: mobile ? '2em' : '4em',
         fontWeight: 'normal',
         marginBottom: 0,
         marginTop: mobile ? '1.5em' : '3em',
         borderBottom: '3px solid #fff'
      }}
    />
    <Header
      as='h2'
      content='Mrtesasdads.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        color: '#EC7312',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
