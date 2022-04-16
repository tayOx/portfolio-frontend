import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './howtouse.css';
import { Alert } from "react-bootstrap"

function Howto() {
  
    return (
        
      <div className="App">
        <div className="App-header">
          <div className='HowH1'>
            <h1>How to use?</h1>
          <Alert className='HowContainer' variant="success">
          <Alert.Heading>Hey, nice to see you 😁</Alert.Heading>
          <p>
            Aww yeah, you are here because want to learn how to use the projects? hmm
          </p>
          <hr />
          <Alert.Heading>Here you are the docs!</Alert.Heading>
          <a href="/howto/trackerit" class="link-secondary">Tracker It</a><a href="/howto/ip" class="link-secondary">IP Infos</a><a href="/howto/qr" class="link-secondary">QR Code</a>
        </Alert>
        </div>
      </div>
      </div>
      
    );

  }

export default Howto;
