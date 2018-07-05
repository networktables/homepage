import PropTypes from 'prop-types'
import React from 'react'
import {
  Container,
  Header,
  Grid,
  Image,
} from 'semantic-ui-react';
import header from '../images/header.png';
import cocktailIcon from '../images/cocktail-icon.png';
import OverviewButton from './OverviewButton';

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
    <Container>
      <Grid columns={2}>
        <Grid.Column>
          <OverviewButton
          heading={'Ontdek Cocktails'}
          subHeading={'Bekijk al onze cocktails en recepten'}
          link={'/cocktails'}
          image={cocktailIcon}
        />
        </Grid.Column>
        <Grid.Column>
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
        </Grid.Column>
      </Grid>
    </Container>
    <Header
      as='h2'
      content='Mr. Flavour voor horeca ondernemers.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        color: '#EC7312',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Container>
      <Grid columns={3}>
        <Grid.Column>
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
        </Grid.Column>
        <Grid.Column>
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
        </Grid.Column>
        <Grid.Column>
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
          <OverviewButton
            heading={'Ontdek Cocktails'}
            subHeading={'Bekijk al onze cocktails en recepten'}
            link={'/cocktails'}
            image={cocktailIcon}
          />
        </Grid.Column>
      </Grid>
    </Container>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default HomepageHeading;
