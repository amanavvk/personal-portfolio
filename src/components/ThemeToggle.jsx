import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
    <IconButton
      sx={{
        position: 'fixed',
        top: 24,
        right: 32,
        zIndex: 1300,
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
      }}
      onClick={toggleTheme}
      color="primary"
      aria-label="toggle theme"
    >
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
