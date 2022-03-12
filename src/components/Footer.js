import React from 'react'
import Logo from '../assets/logo.png';
import Play from '../assets/google-play.png';
import Store from '../assets/app-store.png';
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
      <div><img src={Logo}></img></div>
      <div className='footer__links'>
        <Link to="/"><span>Home</span></Link>
        <Link to="/terms"><span>Terms of Use</span></Link>
        <Link to="/legal"><span>Legal Notices</span></Link>
        <Link to="/help"><span>Help</span></Link>
        <Link to="/acount"><span>Manage Account</span></Link>
      </div>
      <div className='footer__apps'>
        <img src={Play}></img><img src={Store}></img>
        </div>
      <div className='footer__copyright'>Copyright 2020 Dreadfull Tomato Streaming All Rights Reserved</div>
        </div>
  )
}

export default Footer