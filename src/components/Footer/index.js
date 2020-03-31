import React, { Component } from 'react';
import MainFooter from './MainFooter';
import CopyrightFooter from './CopyrightFooter';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <MainFooter />
        <CopyrightFooter />
      </footer>
    );
  }
}
export default Footer
