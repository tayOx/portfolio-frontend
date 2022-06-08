import React, { useState } from 'react';
import './Qrcode.css'
import qrimg from '../assets/img/qrsvg.png';
import Code from "./code"
import Axios from 'axios';



function QrCodeGen(){

    const url = "https://tayo-portfolio-backend.herokuapp.com/genqr"
    const [data, setData ] = useState({type: ""})
    const [data2, setData2 ] = useState({value: ""})
    const [result, setResult] = useState([])

    const getResult = async (e) => {

        e.preventDefault()
        if(data.type && data2.value == ""){
            alert("Preencha ou insira um ip valido")
        }else{

            const response = await Axios.post(url,{

                type: data.type,
                value: data2.value
    
            })
            const allResult = [...result, response.data]
            setResult(allResult)
        }
    }

    function handle(e){

        const newData ={...data}
        newData[e.target.id] = e.target.value
        setData(newData)

        const newData2 = {...data2}
        newData2[e.target.id] = e.target.value
        setData2(newData2)

    }



    return (
        <div>
        <div className='Post-form'>
            <form onSubmit={(e) => getResult(e)}>
                <img src={qrimg} className="Ipmg" />
                <h1>Generator</h1>
                <input onChange={(e) => handle(e)} id="type" value={data.type} placeholder='text, emailto, smsto, url, telno' className='Post-Input' type="text"></input>
                <br></br>
                <input onChange={(e) => handle(e)} id="value" value={data2.value} placeholder='mensagem, email, numero ou url' className='Post-Input' type="text"></input>
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
        
        <div className='result-qr'>
                {result.length >=1 ? result.map((label, idx) => {
        
        const code = `var status =`+" "+label.Message;

                return (
                <div>
                <div className='prism'>
                    <Code key={idx} code={code} language="js" />
                </div>
                <img src={label.url} className="QrImg"></img>
                </div>
                )})
                :""
                }
        </div>
        </div>
      );
}
export default QrCodeGen;
