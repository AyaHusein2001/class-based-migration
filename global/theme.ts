import { createTheme } from "@mui/material/styles";
//test integration
const theme = createTheme({
  palette: {
    primary: {
      main: '#0097A7',
    },
    secondary: {
      main: '#546E7A',
    },
    action: {
      hover: '#0097A71F',
      
    },
    
    
    
  }, 
  components:{
    MuiInput:{
      styleOverrides:{
        root:{
          borderColor:'#546E7A'
        }
      }
    },
    MuiTypography:{
      styleOverrides:{
        h1:{
          fontWeight:500,
          fontSize: '2rem',
          lineHeight: '3.2rem',
          letterSpacing:0.15
        },
        h6:{
          fontWeight:400,
          fontSize: '1.4rem',
          lineHeight: '2rem',
          letterSpacing:0.17,
          
        }
      }
    }
  }
 
});

export default theme;
