import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme'
import Main from './components/Main'
import Image from './images/image-bg.jpg'
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';


import './App.css';

const MyComponent = styled('div')({
  height: 1100, 
  padding: 8,
  borderRadius: 4,
  backgroundImage: `url(${Image})`,
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyComponent>
          <Navbar />
          <Main />
      </MyComponent>
    </ThemeProvider>
  );
}

export default App;
