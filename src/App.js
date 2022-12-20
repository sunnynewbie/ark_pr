import Header from "./components/ui/header";
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { appTheme } from './components/ui/Theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  return (

    <ThemeProvider theme={appTheme}>
      <Header />
      <RouterProvider router={createBrowserRouter([
        {
          'path': '/',
          element: <div>Home</div>
        },
        {
          'path': '/service',
          element: <div>Servies</div>
        },
        {
          'path': '/revolution',
          element: <div>revolution</div>
        },
        {
          'path': '/customsoftware',
          element: <div>Custom software</div>
        },
        {
          'path': '/mobiledev',
          element: <div>Mobile developer</div>
        },
        {
          'path': '/webdev',
          element: <div>Web developer</div>
        },
        {
          'path': '/aboutus',
          element: <div>About us</div>
        },
        {
          'path': '/contactus',
          element: <div>Contact us</div>
        },
      ])} />

    </ThemeProvider>

  );
}

export default App;
