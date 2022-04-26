import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Contact from './Contact';
import { Link,useNavigate } from "react-router-dom";



function Header() {
  var navigate = useNavigate();
  return (
    <div>
      <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Daily Journal
        </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>  
              <Button     
              onClick={()=>(navigate("/"))}           
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button     
              onClick={()=>(navigate("/about"))}           
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About
              </Button>
              <Button     
              onClick={()=>(navigate("/contact"))}           
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Contact
              </Button>                           <Button     
              onClick={()=>(navigate("/compose"))}           
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Compose Post
              </Button> 
          </Box>
          
      </Toolbar>
    </Container>
    
  </AppBar>
  {/* <Router>
    <Routes>
    
    </Routes>
  </Router> */}

  </div>
  )
}

export default Header