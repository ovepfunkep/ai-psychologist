import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      light: '#E3F2FD',
      main: '#2196F3',
      dark: '#1976D2',
    },
    secondary: {
      light: '#F5F5F5',
      main: '#9E9E9E',
      dark: '#616161',
    },
    accent: {
      success: '#4CAF50',
      warning: '#FFC107',
      danger: '#F44336',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
      tertiary: '#F5F5F5',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      tertiary: '#9E9E9E',
    },
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: 'Roboto Mono, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        transition: 'all 0.2s',
      },
      variants: {
        primary: {
          bg: 'primary.main',
          color: 'white',
          _hover: {
            bg: 'primary.dark',
            transform: 'scale(1.02)',
          },
        },
        secondary: {
          bg: 'secondary.main',
          color: 'white',
          _hover: {
            bg: 'secondary.dark',
          },
        },
        danger: {
          bg: 'accent.danger',
          color: 'white',
          _hover: {
            transform: 'scale(1.05)',
            bg: 'red.600',
          },
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'md',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'background.primary',
        color: 'text.primary',
      },
    },
  },
});

export default theme; 