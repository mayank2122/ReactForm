import React from 'react'
import { LogosGoogleIcon, LogosFacebook, LogosTwitter } from '../assets/icons/icons'

const Footer = () => {
  return (
    <div className="component-footer flex-column-center">
      <p>or login with</p>
      <div className="social-icons-panel">
        <div className="social-icon">
          <LogosGoogleIcon />
        </div>
        <div className="social-icon">
          <LogosFacebook />
        </div>
        <div className="social-icon">
          <LogosTwitter />
        </div>
      </div>
      <p>Don't have an Account? <span className="highlighted-text"> Create new now!</span></p>
      <p>By signing up, you agree with out  <span className="highlighted-text"> Terms & Conditions</span></p>
    </div>
  )
}

export default Footer