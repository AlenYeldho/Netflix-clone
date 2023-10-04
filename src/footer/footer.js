import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='footer-main'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h2 className='section-title'>Questions? Call +91 8943 845 011</h2>
        </div>
        <div className='footer-section'>
          <ul className='footer-list'>
            <li className='list-item'>FAQ</li>
            <li className='list-item'>Investor Relations</li>
            <li className='list-item'>Netflix Originals</li>
          </ul>
        </div>
        <div className='footer-section'>
          <ul className='footer-list'>
            <li className='list-item'>Help Center</li>
            <li className='list-item'>Jobs</li>
            <li className='list-item'>Terms of Use</li>
            <li className='list-item'>Contact Us</li>
          </ul>
        </div>
        <div className='footer-section'>
          <ul className='footer-list'>
            <li className='list-item'>Account</li>
            <li className='list-item'>Privacy</li>
            <li className='list-item'>Speed Test</li>
          </ul>
        </div>
        <div className='footer-section'>
          <ul className='footer-list'>
            <li className='list-item'>Media Center</li>
            <li className='list-item'>Gift Cards</li>
            <li className='list-item'>Legal Notice</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
