import React from 'react';
import logo from '../assets/img/lupa.png';
import './home.css';
import Slide from "../components/slide"
import Code from "../components/code"


function Home() {
  
    const code = `var AboutMe = {
      Name: "Yuri Tamayose",
      Age: 17,
      SpokeLanguages: "English",
       "Portuguese-BR",
      ProgrammingLangs: "Node.js",
        "Python", "React.js,"
      CertifiedCourses: "DB - Etec"
    };
    `;
    const code2 = `var Associated = {
      Company: "HardDisk",
      Url: "www.harddisk.com.br",
      Func: "Moderator", "Developer",
      Discord: 
      "https://discord.gg/m4yGDu5e"
    };
    `;

    return (
        
      <div className="App">
        <div className="App-header">
          <div className='Final-logo'>
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h2 className='line-1 anim-typewriter'> Yuri <code className='tayo'>"tayO"</code> Tamayose's Portfolio() </h2>
        <div className='Prism'>
          <Code className="Prism-code" code={code} language="js" />
        </div>
        <div className='Prism2'>
          <Code className="Prism-code2" code={code2} language="js" />
        </div>
        </div>
          <Slide />
      </div>

      
    );

  }

export default Home;
