import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from '../data/mock-data';
import { locations1 as cardLocations1 } from '../data/mock-data';
import { locations2 as cardLocations2 } from '../data/mock-data';
import { locations3 as cardLocations3 } from '../data/mock-data';
import { locations4 as cardLocations4 } from '../data/mock-data';
import CarouselCard from './CarouselCard';

export const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const LocationCards1 = () => {
  const [cards1] = React.useState(cardLocations1);
  if (!cards1.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards1.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const LocationCards2 = () => {
  const [cards2] = React.useState(cardLocations2);
  if (!cards2.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards2.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const LocationCards3 = () => {
  const [cards3] = React.useState(cardLocations3);
  if (!cards3.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards3.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export const LocationCards4 = () => {
  const [cards4] = React.useState(cardLocations4);
  if (!cards4.length) {
    return null;
  }
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cards4.map((location) => {
          return (
            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

