import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import TrackerIt from '../pages/TrackerIt';
import IpInfo from '../pages/ipinfo';
import Qrcode from "../pages/QrCodeGen"
import Howto from "../pages/howtouse"
import HowTrackerIt from "../pages/howTrackerIt"
import HowIp from "../pages/howIp"
import HowQrcode from "../pages/howQr"
import Home from "../pages/home"

import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

export default class NavbarComnp extends Component {
  render() {
    return (
      
      <Router>
      <Navbar variant={"dark"} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">tayO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/trackerit">Tracker It</Nav.Link>
            <Nav.Link as={Link} to="/ipinfo">IP Infos</Nav.Link>
            <Nav.Link as={Link} to="/qr-gen">QR Code</Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/yuri-t-73a6bb21a/">LinkEdin</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/tayOx">Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://discordapp.com/users/839163965074440192/">
                Discord
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              =D
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trackerit' element={<TrackerIt />} />
        <Route path='/ipinfo' element={<IpInfo />} />
        <Route path='/qr-gen' element={<Qrcode />} />
        <Route path='/howto' element={<Howto />} />
        <Route path='/howto/trackerit' element={<HowTrackerIt />} />
        <Route path='/howto/qr' element={<HowQrcode />} />
        <Route path='/howto/ip' element={<HowIp />} />
      </Routes>
    </Router>
    
    )
  }
}
