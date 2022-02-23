import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme'
import Hero from './components/Hero'
import Image from './images/bg-image1.jpg'
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';


import './App.css';
import { CenterFocusStrong } from '@material-ui/icons';

const Background = styled('div')({
  height: '100vh', 
  backgroundImage: `url(${Image})`,
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
          <Navbar />
          <Hero />
      </Background>
    </ThemeProvider>
  );
}

export default App;
