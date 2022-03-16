import { Components, Theme } from '@mui/material';

export default function Button(theme: Theme): Components<Theme> {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
        },
      },
    },
  };
}
