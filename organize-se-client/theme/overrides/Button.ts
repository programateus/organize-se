import { Components, Theme } from '@mui/material';

export default function Button(theme: Theme): Components<Theme> {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
        contained: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
        outlined: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
      },
    },
  };
}
