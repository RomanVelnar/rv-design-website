import { createTheme } from '@material-ui/core/styles';
import { typography } from '@mui/system';
// import Image from '/image-bg.jpg'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
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
    ].join(','), 
    },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "none",
          elevation: "0",
          fontSize: 32,
        }
      }
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       body: {
  //         color: "black",
  //         // backgroundImage: `url(${Image})`,
  //       },
  //     },
  //   },
  // },
});

export default theme;