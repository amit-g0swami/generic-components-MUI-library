import { createTheme } from '@mui/material'

const themeColors = {
  PRIMARY_COLOR: '#FF1A3D',
  SECONDARY_COLOR: '#190306',
  SECONDARY_LIGHT: '#AEAEAE',
  PRIMARY_LIGHT: '#FFD1D8',
  SCREEN_COLOR: '#F8F8F8',
  WHITE: '#FFFFFF'
}

const themeFont = 'Lato'

const POINT_TWO_FIVE = 0.25

export const theme = createTheme({
  typography: {
    fontFamily: themeFont,
    h1: {
      fontSize: 39,
      lineHeight: '67px'
    },
    h2: {
      lineHeight: '60px',
      fontSize: 33
    },
    h3: {
      lineHeight: '52px',
      fontSize: 27
    },
    h4: {
      lineHeight: '48px',
      fontSize: 23
    },
    h5: {
      lineHeight: '43px',
      fontSize: 19
    },
    h6: {
      lineHeight: '39px',
      fontSize: 16
    },
    subtitle1: {
      lineHeight: '51px',
      fontSize: 26
    },
    subtitle2: {
      lineHeight: '25px',
      fontSize: 21
    },
    body1: {
      lineHeight: '39px',
      fontSize: 16
    },
    body2: {
      lineHeight: '37px',
      fontSize: 14
    },
    caption: {
      lineHeight: '34px',
      fontSize: 12
    },
    overline: {
      lineHeight: '37px',
      fontSize: 14
    },
    button: {
      textTransform: 'none'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 991,
      lg: 1400,
      xl: 1920
    }
  },
  spacing: (factor: number) => `${POINT_TWO_FIVE * factor}rem`,
  palette: {
    primary: {
      main: themeColors.PRIMARY_COLOR,
      light: themeColors.PRIMARY_LIGHT
    },
    secondary: {
      main: themeColors.SECONDARY_COLOR,
      light: themeColors.SECONDARY_LIGHT
    },
    common: {
      white: themeColors.WHITE
    }
  }
})
