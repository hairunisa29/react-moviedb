import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import Cards from './Cards';

function SearchList({result}){
    return (
        <>
            <Container maxWidth="md" className='content-container'>
                <Typography
                        variant="h4"
                        align="center"
                        color="textPrimary"
                        marginTop='80px'
                        gutterBottom
                        
                    >
                    Results
                </Typography>
                <Grid container spacing={4}>
                    {result &&
                                result.map((content) => (
                                    <Cards
                                        key={content.id}
                                        id={content.id}
                                        content={content}
                                    
                                    />
                        ))}
                </Grid>
                
            </Container>
        </>
       
    )
}

export default SearchList;