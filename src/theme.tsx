import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
});

export const theme = extendTheme({
  breakpoints,
  colors: {
    california: {
      '50': '#fffaf2',
      '100': '#fff5e6',
      '200': '#ffe5bf',
      '300': '#ffd699',
      '400': '#ffb74d',
      '500': '#ff9800',
      '600': '#e68900',
      '700': '#bf7200',
      '800': '#995b00',
      '900': '#7d4a00',
    },
  },
  fonts: {
    heading: 'Changa',
    body: 'Changa',
  },

  // components: {
  //   Button: {
  //     variants: {
  //       solid: {
  //         bg: 'california.500',
  //         color: 'white',
  //       },
  //     },
  //   },
  // },
});
