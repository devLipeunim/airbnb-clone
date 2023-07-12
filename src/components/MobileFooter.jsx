import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { BsGlobe } from 'react-icons/bs';

import { justifyCenter } from '../themes/commonStyles';

const footerLinks = [
  { id: 1, text: '. Terms', url: '#' },
  { id: 2, text: '. Sitemap', url: '#' },
  { id: 3, text: '. Privacy', url: '#' },
  { id: 4, text: '. Your privacy choices', url: '#' },
  { id: 5, text: '. Destinations', url: '#' },
];

const MobileFooter = () => {
  return (
    <Box sx={{ borderTop: '1px solid #ccc', mt: 3, pt: 2, width: '100%' }}>
      <Paper>
        <Button>
          <Box sx={{ ...justifyCenter, mr: 1 }}>
            <BsGlobe size={24} />
          </Box>
          English ( US )
        </Button>

        <Button> $ USD </Button>
      </Paper>

      <Stack sx={{ mt: 2 }}>
        <Paper>
          <Link href="#">&copy; {new Date().getFullYear()} Airbnb, inc.</Link>
        </Paper>
      </Stack>
      <Stack sx={{ mt: 2, display: "flex", flexWrap: "wrap" }} >
        {footerLinks.map((link) => {
          return (
            <Paper key={link.id}>
              <Link href={link.url}> {link.text}</Link>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MobileFooter;
