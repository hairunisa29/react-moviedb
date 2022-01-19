import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Container, Grid, Typography} from "@mui/material";
import '../Layout/style/style.css';
import Cards from '../Components/Cards';
// import Modal from './Modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Trending(){
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    

    useEffect(()=>{
        console.log('useEffect')
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`).then(res => {
            console.log(res.data.results)
            setMovies(res.data.results)
            
        })

        axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`).then(res => {
            console.log(res.data.results)
            setTvShows(res.data.results)
           
        })

        // axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`).then(response => {
        //     let results=response.data.images    
        //     console.log(results)
        //     // setContents(res.data.results)

        // })



      },[])
      

      
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };



    return(
        <React.Fragment>
            <Container maxWidth="md" className='content-container'>
                <Typography
                        variant="h6"
                        align="left"
                        color="textPrimary"
                        gutterBottom
                        style={{fontWeight:'bold'}}
                    >
                    Trending Movies
                </Typography>
                
                
                <Slider {...settings}>
                    
                    {movies &&
                                movies.map((movie) => (
                                    <Cards
                                        key={movie.id}
                                        id={movie.id}
                                        content={movie}
                                       
                                    />
                    ))}
                </Slider>
                {/* <Grid container spacing={4}> */}
                    
                {/* </Grid> */}

                <Typography
                        variant="h6"
                        align="left"
                        color="textPrimary"
                        gutterBottom
                        style={{fontWeight:'bold', marginTop:'70px'}}
                    >
                    Trending TV Shows
                </Typography>
                
                
                <Slider {...settings} style={{marginBottom:'20px'}}>
                    
                    {tvShows &&
                                tvShows.map((tvShow) => (
                                    <Cards
                                        key={tvShow.id}
                                        id={tvShow.id}
                                        content={tvShow}
                                        
                                    />
                    ))}
                </Slider>
                    
                
            </Container>
            
            
        </React.Fragment>
    )
}

export default Trending;