import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import {Button, Container, Grid, Typography, TextField} from "@mui/material";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import SearchList from './SearchList';
import { Route, Switch } from "react-router-dom";


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

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  


function SearchField(){
    const [searchField, setSearchField] = useState('');
    const [searchShow, setSearchShow] = useState(false);
    const [result, setResult] = useState([]);

    const handleChange = e => {
      e.preventDefault();
      setSearchField(e.target.value);
      if(e.target.value===""){
        setSearchShow(false);
      }
      else {
        setSearchShow(true);
      }
    };


    const searchHandler = async() => {
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchField}&page=1&include_adult=false`).then(res => {
        console.log(res.data.results)
        setResult(res.data.results)
      })
  }


    function searchList() {
      if (searchShow) {
        return (
          <>
            <Route exact path="/search">
              <SearchList result={result}/>
            </Route>
          </>
          

        );
      }
    }


    return(
        <>
            <Search>
                
                    <Button
                      onClick={searchHandler}
                      type='button'
                    >
                      <SearchIcon/>
                    </Button>
                
                <TextField
                    placeholder="Search"
                    
                    name='search'
                    onChange={handleChange}
                    value={searchField}
                />
            </Search>
            {searchList()}
        </> 
        
    )

}

export default SearchField;