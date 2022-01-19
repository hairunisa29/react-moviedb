import { Container, Typography } from '@mui/material';
import '../Layout/style/style.css';


function Movies(){

    return(
        <div>
            <Container className='content-container'>
                <Typography
                    variant="h4"
                    align="center"
                    color="textPrimary"
                    marginTop='80px'
                    gutterBottom
                >
                    Movies
                </Typography>
                {/* <span className="page-title">Trending</span> */}
            </Container>
            
            
        </div>
    )
}

export default Movies;