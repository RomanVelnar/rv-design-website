import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme'
import Main from './components/Main'
import Image from './assets/images/image-bg.jpg'
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
          <Navbar />
          <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
