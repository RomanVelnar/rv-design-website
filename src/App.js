import Home from './components/Home'
import { ThemeProvider } from '@mui/material';
import theme from './assets/theme'
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <Home />
    </ThemeProvider>
  );
}

export default App;
