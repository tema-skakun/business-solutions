import React, {useState, useEffect} from 'react';
import Main from './components/Main';
import Header from './components/Header';
// import reviewsData from './data.json';
import reviewsData from './data_test_pagination.json';

interface Review {
  name: string;
  review: string;
  date: string;
}

interface ReviewsData {
  ru: { [key: string]: Review };
  en: { [key: string]: Review };
}

const reviewsDataTyped: ReviewsData = reviewsData;

const App: React.FC = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? (savedLanguage as 'ru' | 'en') : 'ru';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleLanguageChange = (newLanguage: 'ru' | 'en') => {
    setLanguage(newLanguage);
  };

  const reviews = reviewsDataTyped[language];

  return (
    <div>
      <Header currentLanguage={language} onLanguageChange={handleLanguageChange}/>
      <Main reviews={reviews}/>
    </div>
  );
};

export default App;
