import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TheatersIcon from '@mui/icons-material/Theaters';
import './style/style.css';
// import SearchField from '../Components/Search'



export default function Header({SearchField}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        style={{backgroundColor:'#0e0e0d'}}
      >
        <Toolbar>
            <TheatersIcon 
              style={{marginRight:'5px', color:'#ff4c25'}}
            />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            id='title-header'
            style={{color:'#ff4c25'}}
          >
            Moviepedia
          </Typography>
          {SearchField}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
