import React from 'react';
import './howtouse.css';
import { Alert } from "react-bootstrap"

function HowIp() {
  
    return (
        
      <div className="App">
        <div className="App-header">
          <div className='HowH1'>
          <h1>IP Info</h1>
          <Alert className='HowContainer' variant="info">
          <Alert.Heading>Simple to use:</Alert.Heading>
          <p>
            The IP Info it's simple to use! You just have to enter a valid ip or domain.
          </p>
          <hr />
          <p>ex: "191.0.0.1 or google.com"</p>
        </Alert>
        </div>
      </div>
      </div>
      
      
    );

  }

export default HowIp;
