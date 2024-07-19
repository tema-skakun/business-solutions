import React, { useState, useEffect, useRef } from 'react';
import './LanguageSelector.css';

interface LanguageSelectorProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleLanguageChange = (language: 'ru' | 'en') => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="select-wrapper" ref={dropdownRef}>
      <button onClick={handleToggle} className="language-selector">
        {currentLanguage.toUpperCase()}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <li onClick={() => handleLanguageChange('ru')}>RU</li>
        <li onClick={() => handleLanguageChange('en')}>EN</li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
