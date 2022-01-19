import axios from 'axios';
import React, { useEffect, useState } from "react";
import {img_154, noPicture} from "../Config/Config";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import '../Layout/style/style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        
    },
    cardContent: {
        flexGrow: 1,
    },
}));



function Cast({id, media_type}){
    const classes = useStyles();
    const [credits, setCredits] = useState([]);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    
      


    useEffect(()=>{
        console.log('useEffect')
        axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(res => {
            let result=res.data.cast;
            console.log(result);
            setCredits(result);
        })
      },[])

      return(
          <>
          <Slider {...settings}>
            {/* <div className='row'>
            <div className='images-row'> */}
            
                
                {credits &&
                            credits.map((cast) => (
                                <Card key={id} className={classes.card}>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia
                                        component="img"
                                        image={cast.profile_path ? `${img_154}${cast.profile_path}` : noPicture}
                                        alt={cast.name}
                                        style={{maxHeight:'150px'}}
                                        className='image-row'
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '35%',
                                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                                            color: 'white',
                                            padding: '10px',
                                        }}
                                    >
                                        <Typography style={{fontSize:'8pt'}}>{cast.name}</Typography>
                                    </Box>
                                
                                </Box>
                                
                                </Card>
                            ))}
            
                

                {/* </div>
            </div> */}
            </Slider>
          
          </>
      )
}

export default Cast;