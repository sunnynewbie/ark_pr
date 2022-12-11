import {createTheme} from '@mui/material/styles'

export const appTheme= createTheme({
 palette:{
    common:{
     black:'#2a2a2a',
     white:'#fffff',
      
    },
    primary:{
      main:"#0057B7",
    
    },
    secondary:{
      main:'#FF5D0A'
    }
 },
 typography:{
   h3:{
      fontWeight:300
   }
 }

});