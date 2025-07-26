'use client';

import { createTheme } from '@mui/material';

export const MuiTheme = createTheme({
  palette: {
    primary: {
      main: '#333', // あとで決めて
      contrastText: '#333', // あとで決めて
    },
    warning: {
      main: '#E9494B', // 警告色
    },
    success: {
      main: '#4CAF50', // 成功色
    },

    text: {
      primary: '#333',
    },
  },
});
