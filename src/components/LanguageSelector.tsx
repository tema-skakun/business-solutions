// src/components/LanguageSelector.tsx
import React from 'react';

interface LanguageSelectorProps {
  currentLanguage: 'ru' | 'en';
  onLanguageChange: (language: 'ru' | 'en') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as 'ru' | 'en';
    onLanguageChange(selectedLanguage);
  };

  return (
    <select value={currentLanguage} onChange={handleChange}>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSelector;
