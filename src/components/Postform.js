import React, { useState } from 'react';
import './postform.css'
import cor from '../assets/img/correios.png';
import { Button } from "react-bootstrap"
import { Box, Stepper, Step, StepLabel } from '@mui/material';
import Axios from 'axios';


function PostForm(){

    const url = "https://tayo-portfolio-backend.herokuapp.com/correios"
    const [data, setData] = useState({codigo: ""})
    const [result, setResult] = useState([])

    const getResult = async (e) => {

        e.preventDefault()
        if(data.codigo == ""){
            alert("Preencha ou insira um codigo valido")
        }else{

            const response = await Axios.post(url,{

                codigo: data.codigo
    
            })
            const allResult = [...result, response.data[0]]
            setResult(allResult)
        }
    }

    function handle(e){

        const newData ={...data}
        newData[e.target.id] = e.target.value
        setData(newData)

    }
    const steps = result;
    
    return (
        <div className='Post-form'>
            <form onSubmit={(e) => getResult(e)}>
                <img src={cor} className="Cor" />
                <h1>Tracker It</h1>
                <input onChange={(e) => handle(e)} id="codigo" value={data.codigo} placeholder='Tracking code' className='Post-Input' type="text"></input>
                <br></br>
                <button class="search">
                <span>Search</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
                </button>
            </form>
            <div className='Stepper-css'>
                    <Box sx={{ width: '100%' }}>
                    <Stepper activeStep={1} alternativeLabel>
                        {steps.length >=1 ? steps[0].map((label, idx) => {
                        return (<Step completed={true} key={idx}>
                            <StepLabel><span className='Stepper-text-date'>{label.data}</span> </StepLabel>
                            <span className='Stepper-text-status'>{label.status}</span>
                            <br></br>
                            <span className='Stepper-text-time'>{label.hora}</span>
                        </Step>
                        )})
                        :""
                    }
                    </Stepper>
                    </Box>
                </div>
        </div>
      );
}
export default PostForm;
