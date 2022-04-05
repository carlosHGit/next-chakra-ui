import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.500',
        }
      }
    },
    // outline: {
    //   field: {
    //     borderColor: 'blue',
    //     border:'4px dashed',
    //     backgroundColor: 'red'
    //   }
    // }
  }, sizes: {
    md: {
      field: {
        borderRadius: 'none',
      }
    }
  }
};

const inputCheckboxStyles = {
  baseStyle: {
    control: {
      borderRadius: 'none',
      _focus: {
        ring: 2,
        ringColor: 'brand.500',
      }
    }
  }
};

const buttonStyles = {
  variants: {
    primary: (props: any) => ({
      rounded: 'none',
      color: mode('white', 'gray.800')(props),
      _focus: {
        ring: 2,
        ringColor: 'brand.500',
      },
      backgroundColor: mode('brand.500', 'brand.200')(props),
      _hover: {
        backgroundColor: mode('brand.600', 'brand.300')(props),
      },
      _active: {
        backgroundColor: mode('brand.700', 'brand.400')(props),
      }
    }),
    textButton: (props: any) => ({
      display: 'contents',
      padding:'2px',
      margin:'2px',
      _focus: {
        ring: 'none',
      },
      color: mode('brand.500', 'brand.400')(props),
      _hover: {
        color: mode('brand.800', 'brand.300')(props),
      },
    })
  },
};

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5fee5',
      100: '#e1fbb2',
      200: '#cdf781',
      300: '#b8ee56',
      400: '#a2e032',
      500: '#8ac919',
      600: '#71ab09',
      700: '#578602',
      800: '#3c5e00',
      900: '#203300'
    }
  },
  fonts: {
    heading: `Monserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`,
  },
  components: {
    Button: { ...buttonStyles },
    Input: { ...inputSelectStyles },
    Select: { ...inputSelectStyles },
    Checkbox: { ...inputCheckboxStyles },
  }
},
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: ['filled'],
    components: ['Input', 'Select'],
  }),
  // withDefaultVariant({
  //   variant: 'outline',
  //   components: ['Input', 'Select'],
  // }),
);

export default theme;
