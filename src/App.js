import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme'
import Main from './components/Main'

import './App.css';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <Navbar />
          <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
