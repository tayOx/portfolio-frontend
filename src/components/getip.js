import React, { useState } from 'react';
import './Getip.css'
import ipimg from '../assets/img/ip.png';
import Code from "./code"
import Axios from 'axios';


function MyIp(){

    const url = "https://tayo-portfolio-backend.herokuapp.com/ip"
    const [data, setData] = useState({ip: ""})
    const [result, setResult] = useState([])

    const getResult = async (e) => {

        e.preventDefault()
        if(data.ip == ""){
            alert("Preencha ou insira um ip valido")
        }else{

            const response = await Axios.post(url,{

                ip: data.ip
    
            })
            const allResult = [...result, response.data]
            setResult(allResult)
        }
    }

    function handle(e){

        const newData ={...data}
        newData[e.target.id] = e.target.value
        setData(newData)

    }



    return (
        <div>
        <div className='Post-form'>
            <form onSubmit={(e) => getResult(e)}>
                <img src={ipimg} className="Ipmg" />
                <h1>Get Infos</h1>
                <input onChange={(e) => handle(e)} id="ip" value={data.ip} placeholder='127.0.0.1' className='Post-Input' type="text"></input>
                <br></br>
                <button class="btn">
                <span>Search</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
                </button>

            </form>
        </div>
        
        <div className='result'>
                {result.length >=1 ? result.map((label, idx) => {
        
        const code = `var Result = {
        status:` +label.status+`,
        continent:` +label.continent+`,
        country:` +label.country+`,
        region:` +label.region+`,
        city:` +label.city+`,
        org:` +label.org+`,
        proxy:` +label.proxy+`,
        ip:` +label.query+`,
        };`;
                return (
        
                <div className='prism'>
                    <Code key={idx} code={code} language="js" />
                </div>
        
                )})
                :""
                }
        </div>
        </div>
      );
}
export default MyIp;
