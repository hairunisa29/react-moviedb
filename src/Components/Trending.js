import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Container, Grid, Typography} from "@mui/material";
import '../Layout/style/style.css';
import Cards from './Cards';
// import Modal from './Modal';

function Trending(){
    const [contents, setContents] = useState([]);
    const [details, setDetails] = useState([]);


    useEffect(()=>{
        console.log('useEffect')
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`).then(res => {
            console.log(res.data.results)
            setContents(res.data.results)

        })

        axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
            let results=response.data.images    
            console.log(results)
            // setContents(res.data.results)

        })



      },[])

      

    return(
        <React.Fragment>
            <Container maxWidth="md" className='content-container'>
                <Typography
                        variant="h4"
                        align="center"
                        color="textPrimary"
                        marginTop='80px'
                        gutterBottom
                        
                    >
                    Trending
                </Typography>
                <Grid container spacing={4}>
                    {contents &&
                            contents.map((content) => (
                                <Cards
                                    key={content.id}
                                    id={content.id}
                                    content={content}
                                
                                />
                    ))}
                </Grid>
                    
                
            </Container>
            
            
        </React.Fragment>
    )
}

export default Trending;