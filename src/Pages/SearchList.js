import React from 'react';
import {Container, Grid} from "@mui/material";
import Cards from '../Components/Cards';
import '../Layout/style/style.css';


function SearchList({result}){
    // console.log(result)
    return (
        <React.Fragment>
            {/* <div>
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


                 */}
            {/* </div> */}
            <Container maxWidth="md" style={{marginTop:'30px'}}>
                
                <Grid container spacing={4}>
                    {result &&
                                result.map((content) => (
                                    <Grid item key={content.id} xs={12} sm={6} md={4}>
                                        <Cards
                                            key={content.id}
                                            id={content.id}
                                            content={content}
                                        />
                                    </Grid>
                                    
                        ))}
                </Grid>           
            </Container>        
        </React.Fragment>

    )
}

export default SearchList;