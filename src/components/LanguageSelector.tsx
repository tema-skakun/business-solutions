import React, { useState, useEffect, useRef, useCallback } from 'react';
import './LanguageSelector.css';

interface LanguageSelectorProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleLanguageChange = useCallback((language: 'ru' | 'en') => {
    onLanguageChange(language);
    setIsOpen(false);
  }, [onLanguageChange]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // console.log("rerender LanguageSelector");

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

export default React.memo(LanguageSelector);
