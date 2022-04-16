import React from 'react';
import './howtouse.css';
import { Alert } from "react-bootstrap"

function HowtoTracker() {
  
    return (
        
      <div className="App">
        <div className="App-header">
          <div className='HowH1'>
            <h1>Tracker It Documentation</h1>
          <Alert className='HowContainer' variant="info">
          <Alert.Heading>Simple to use:</Alert.Heading>
          <p>
            The TrackerIt only has suport to track Correios's orders, so, the tracking code must be to be Correios's code.
          </p>
          <hr />
          <p>ex: "QI00000000BR"</p>
        </Alert>
        </div>
      </div>
      </div>
      
      
    );

  }

export default HowtoTracker;
