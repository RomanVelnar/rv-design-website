import { createMuiTheme } from '@material-ui/core';
import { typography } from '@mui/system';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#53ABAC"
    },
    secondary: {
      main: "#AC5453"
    }
  },
  typography: {
    fontFamily: [
        'Poppins', 
        'sans-serif'
    ].join(',')
    } 
});

export default theme;