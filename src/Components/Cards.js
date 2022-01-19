import * as React from 'react';
import {Box, Card, Button, CardMedia, CardContent, CardActionArea, Grid, Typography, Modal} from '@mui/material';
import {makeStyles} from "@mui/styles";
import {img_500, noPicture} from "../Config/Config";
import StarRateIcon from '@mui/icons-material/StarRate';
import ModalPopUp from './Modal';




const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '5px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        height: '115px',
    },
}));

function Cards({content, id}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            {/* <Grid item key={content.id} xs={12} sm={6} md={4}> */}
                
                    <Card className={classes.card}>
                    <CardActionArea onClick={handleOpen}>
                        <CardMedia
                            component="img"
                            image={content.poster_path? img_500+content.poster_path : noPicture}
                            alt={content.title? content.title : content.name}
                        />
                        <CardContent className={classes.cardContent}>
                            {/* <Typography gutterBottom component="div"  style={{fontWeight:'bold', fontSize:'10pt', textAlign:'left'}}>
                                {content.title}
                            </Typography> */}
                            <div className='row'>
                                <div className='col-9'>
                                    <Typography gutterBottom component="div"  style={{fontWeight:'bold', fontSize:'10pt', textAlign:'left'}}>
                                        {content.title ? content.title : content.name}
                                    </Typography>
                                </div>
                                <div className='col-3'>
                                    <span style={{ display: 'inline-flex' }}>
                                        <StarRateIcon style={{color:'#ffd966', fontSize:'12pt', textAlign:'left'}}/>
                                        <Typography gutterBottom component="div" style={{fontSize:'9pt', textAlign:'left'}}>
                                            {content.vote_average}
                                        </Typography>  
                                    </span>
                                </div>
                            </div>
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
                
            {/* </Grid> */}
            
            
        </>
    )
}

export default Cards;