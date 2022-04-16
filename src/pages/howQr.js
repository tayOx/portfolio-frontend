import React from 'react';
import './howtouse.css';
import { Alert } from "react-bootstrap"

function HowQr() {
  
    return (
        
      <div className="App">
        <div className="App-header">
          <div className='HowH1'>
          <h1>Qr Code Generator</h1>
          <Alert className='HowContainer' variant="info">
          <Alert.Heading>Simple to use:</Alert.Heading>
          <p>
            The QR Code Generator has four options (mailto,smsto,telno and url), to use 
            the application, you must to enter in the first input the type of an options, and in the second input,
            the value!
          </p>
          <hr />
          <p>values ex: "exemple@gmail.com", "google.com", 
            "+5511900000000"</p>
          <p className='observation'>obs: telno and smsto, both are cellphone numbers.</p>
        </Alert>
        </div>
      </div>
      </div>
      
      
    );

  }

export default HowQr;
