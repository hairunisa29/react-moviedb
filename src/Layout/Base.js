import * as React from 'react';
import { useState, useEffect } from 'react';
import { Navigate, Route, useNavigate, Routes } from "react-router-dom";
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Typography, TextField, Toolbar} from "@mui/material";
import axios from 'axios';
import SearchList from '../Pages/SearchList';
import Trending from '../Pages/Trending';
import Login from '../Pages/Login';
// import Header from './Header';
import TheatersIcon from '@mui/icons-material/Theaters';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import CloseIcon from '@mui/icons-material/Close';

import './style/style.css';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


  const CloseIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 14),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'auto',
    display: 'flex',
    
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
        '&:active': {
          width: '20ch',
        },
      },
    },
  }));

  


function Base(){
    let navigate = useNavigate();
    const [searchField, setSearchField] = useState('');
    const [searchShow, setSearchShow] = useState(false);
    const [result, setResult] = useState([]);
    const [showClearButton, setShowClearButton] = useState(false);

    const handleChange = e => {
      e.preventDefault();
      setSearchField(e.target.value);
      // console.log(e.target.value)
    };

    useEffect(()=>{
      // console.log('SF'+searchField)
      if (searchField.length > 0){
        axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchField}&page=1&include_adult=false`).then(res => {
        console.log(res.data.results)
        setResult(res.data.results)
      })
        navigate(`/search?q=${searchField}`)
        setSearchShow(true);
        setShowClearButton(true);
      }
      else{
        // navigate('/trending')
        setSearchShow(false);
        setShowClearButton(false);
      }

    },[searchField])


    const clearHandle = e => {
      e.preventDefault();
      setSearchField('')
      navigate('/trending')
    }

    

    
    function searchList() {
        if (searchShow) {
          return (
            <>
              {searchField.length > 0 && 
                (<Typography
                variant="h4"
                align="center"
                color="textPrimary"
                marginTop='80px'
                gutterBottom
                >
                Results
                </Typography>)
              
              }
              
              <SearchList result={result}/>
            </>
          );
        }
    }



    return(
        <>
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
                    <Search>
                        <SearchIconWrapper>
                          <SearchIcon/>
                        </SearchIconWrapper>
                        
                        <CloseIconWrapper>
                        {showClearButton &&
                            <div className='clear-button' onClick={clearHandle}>
                              <CloseIcon/>
                            </div>
                          }
                        </CloseIconWrapper> 
                     
            
                        <StyledInputBase
                          placeholder="Search"
                          name='search'
                          onChange={handleChange}
                          value={searchField}
                          autoComplete="off"
                        />
                          
                       
                        
                        

                    </Search>
                   
                    

          
                </Toolbar>
                </AppBar>
            </Box>
            
            
            <Routes>
                <Route path="/" element={<Navigate to="/trending"/>}/>
                <Route path="/trending" element={<Trending/>}/>          
                <Route path={`/search?q=${searchField}`} element={<Navigate to="/search"/>}/>
                <Route path="/search" element={<SearchList/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

            
            {searchList()}
            
        </>
        
    )

}

export default Base;