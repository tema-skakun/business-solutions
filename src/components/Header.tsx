import React, { Component } from 'react';
import Watch from './Watch';
import LanguageSelector from './LanguageSelector';
import './Header.css';

interface HeaderProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

class Header extends Component<HeaderProps> {
  shouldComponentUpdate(nextProps: HeaderProps) {
    return nextProps.currentLanguage !== this.props.currentLanguage;
  }

  render() {
    // console.log("rerender header");
    return (
      <header className="header">
        <div className="logo-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurMS2wpZtJiP4XQOZHpsE6i0iccEHm2zWig&usqp=CAU" alt="Logo" />
        </div>
        <Watch />
        <div className="language-selector-wrapper">
          <LanguageSelector
            currentLanguage={this.props.currentLanguage}
            onLanguageChange={this.props.onLanguageChange}
          />
        </div>
      </header>
    );
  }
}

export default Header;
