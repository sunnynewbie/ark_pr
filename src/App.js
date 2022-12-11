import Header from "./components/ui/header";
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import {appTheme} from './components/ui/Theme'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <div className="App">
        <Header />
        hello
      </div>
    </ThemeProvider>

  );
}

export default App;
