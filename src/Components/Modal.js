import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Box, Card, Button, CardMedia, CardContent, Typography, Modal} from '@mui/material';
import {img_154} from "../Config/Config";
import {img_500} from "../Config/Config";
import Cast from './Cast';
import {makeStyles} from "@mui/styles";
import '../Layout/style/style.css';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 620,
  height: 630,
  bgcolor: 'background.paper',
  boxShadow: 24,
  
  
  // overflowY: "scroll",
};




export default function ModalPopUp({open, handleClose, id, content}) {
  // const classes = useStyles();
  const [genres, setGenres] = useState([]);
  

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`).then(response => {
    let results=response.data.genres
    setGenres(results)
  })
  },[])

  

  return (
  
          <Card sx={style}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                  component="img"
                  alt="green iguana"
                  height="250"
                  image={img_500+content.backdrop_path}
                />
              {/* <img src={img_500+content.backdrop_path} style={{borderRadius:'10px'}}/> */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  color: 'white',
                  padding: '10px',
                }}
              >
                <CardContent>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {content.title}
                  </Typography>
                  <Typography style={{fontSize:'10pt'}} className='modal-movie-detail'>
                    Release Date: {content.release_date}
                  </Typography>
                </CardContent>
              </Box>
              
            </Box>
              <CardContent className='modal-movie-detail'>
                <div className='row'>
                  <div className='col'>
                    <Box className='content-modal-desc'>
                      <Typography sx={{ mt: 2 }} id='modal-movie-desc'>
                        {content.overview}
                      </Typography>
                    </Box>
                  </div>
                  <Box
                    sx={{
                      width:'30%'
                    }}
                  >
                    <Typography className="movie-detail-title" style={{fontWeight:'bold'}}>
                      Genre
                    </Typography>
                    
                    {genres &&
                            genres.map((genre) => (        
                              <div className='col' key={genre.id}>
                                  {genre.name}
                              </div>
                            ))}
                  </Box>
                  
                </div>
                
              </CardContent>
              
              
            
            <Box style={{paddingRight:'25px', paddingLeft:'25px'}}>
              <Typography className="movie-detail-title" style={{fontWeight:'bold'}}>
                Cast
              </Typography> 
              <Cast
                id={id}
                content={content}
              />
            </Box>
            
          </Card>

  );
}
