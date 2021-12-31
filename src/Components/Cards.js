import * as React from 'react';
import {Box, Card, Button, CardMedia, CardContent, CardActionArea, Grid, Typography, Modal} from '@mui/material';
import {makeStyles} from "@mui/styles";
import {img_300} from "../Config/Config";
import StarRateIcon from '@mui/icons-material/StarRate';
import ModalPopUp from './Modal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function Cards({content, id}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <Grid item key={content.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardActionArea onClick={handleOpen}>
                        <CardMedia
                            component="img"
                            image={img_300+content.poster_path}
                            alt={content.title}
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h7" component="div"  style={{fontWeight:'bold'}}>
                                {content.title}
                            </Typography>
                            
                            
                            <span style={{ display: 'inline-flex' }}>
                                <StarRateIcon
                                    style={{color:'#ffd966', fontSize:'14pt'}}
                                />
                                <Typography gutterBottom component="div" style={{fontSize:'11pt'}}>
                                    {content.vote_average}
                                </Typography>     
                            </span>
                                        

                            
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <div>
                        <ModalPopUp
                            key={id}
                            open={open}
                            content={content}
                            id={id}
                        />
                    </div>
                </Modal>
                
            </Grid>
            
            
        </>
    )
}

export default Cards;