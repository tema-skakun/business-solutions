// src/components/LanguageSelector.tsx
import React from 'react';
import './LanguageSelector.css';

interface LanguageSelectorProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({currentLanguage, onLanguageChange}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as 'ru' | 'en';
    onLanguageChange(selectedLanguage);
  };

  return (
    <div className="select-wrapper">
      <select
        value={currentLanguage}
        onChange={handleChange}
        className="language-selector"
      >
        <option value="ru">RU</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
