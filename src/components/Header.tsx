// src/components/Header.tsx
import React, { Component } from 'react';
import Watch from './Watch';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
