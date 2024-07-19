// src/components/Header.tsx
import React, { Component } from 'react';
import Watch from './Watch';
import LanguageSelector from './LanguageSelector';
import './Header.css';

interface HeaderProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header className="header">
        <img src="https://via.placeholder.com/150" alt="Logo" />
        <LanguageSelector
          currentLanguage={this.props.currentLanguage}
          onLanguageChange={this.props.onLanguageChange}
        />
        <Watch />
      </header>
    );
  }
}

export default Header;
