import React from "react"
import Sidebar from './components/Sidebar';
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import useMediaQuery from '@mui/material/useMediaQuery';
function App() {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const { theme } = useThemeContext();


  return (
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="main">
         <Sidebar />
      <Box sx={{bgcolor:"primary.main",width:{xs:"0",md:"75%"} ,height:"100vh",display: { xs: "none", md: "block" },}} > </Box>
      
      </div>
 
     </ThemeProvider>
  );
}

export default App;
