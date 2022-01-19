import React, {useState} from 'react';
import FormControl from '@mui/material/FormControl';
import {Box, Button, Input, TextField} from '@mui/material';
import axios from 'axios';


function Login(){
    const [formData, setFormData] = useState({
        username:"",
        password: "",
    });

    const [token, setToken] = useState('');

    const handleChange = e => {
        let data = {...formData};
        data[e.target.name] = e.target.value;
        setFormData(data)
    };

    // console.log(formData.username)
    // console.log(formData.password)



    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = { username:formData.username, password:formData.password , request_token: token };
        await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                if (response.status === 200){
                    console.log(response.data.request_token)
                    setToken(response.data.request_token)
                }
                else{
                    alert('there has been some error')
                }
            })
            .then(await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`, data)
                .then(res => {
                    if (res.status === 200){
                        console.log(res)
                        alert('logged in ' + res.data.success)
                        // return(res)
                    
                    }
                    else{
                        alert('there has been some error')
                    }
                })
                .then()
                .catch(error => {
                    console.log('there was an error in post', error)
                })
            )
            .catch(error => {
                console.log('there was an error', error)
            })
        
            
        // await axios.post(`https://api.themoviedb.org/3/authentication/${token}/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`, data)
        //     .then(res => {
        //         if (res.status === 200){
        //             console.log(res)
        //             alert('logged in' + res.success)
        //             // return(res)
                
        //         }
        //         else{
        //             alert('there has been some error')
        //         }
        //     })
        //     .then()
        //     .catch(error => {
        //         console.log('there was an error', error)
        //     })
    }

    return(
        <>
            <Box component="form" autoComplete="off" style={{marginTop:'80px'}}>
                <div className='form-group'>
                    <Input placeholder="Enter Username" type='text' name='username' value={formData.username} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <Input placeholder="Enter Password" type='password' name='password' value={formData.password} onChange={handleChange}/>
                </div>
                <Button variant="contained" onClick={handleSubmit}>Sign In</Button>
            </Box>
        </>
        
    )

}

export default Login;