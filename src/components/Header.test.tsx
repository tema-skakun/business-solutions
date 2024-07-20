import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  const mockOnLanguageChange = jest.fn();

  test('renders header with logo and language selector', () => {
    render(<Header currentLanguage="en" onLanguageChange={mockOnLanguageChange} />);

    // проверка наличия логотипа
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    // проверка наличия кнопки выбора языка
    const languageSelectorButton = screen.getByRole('button', { name: /EN/i });
    expect(languageSelectorButton).toBeInTheDocument();
  });

  test('calls onLanguageChange when language is changed', () => {
    render(<Header currentLanguage="en" onLanguageChange={mockOnLanguageChange} />);

    // поиск кнопки выбора языка
    const languageSelectorButton = screen.getByRole('button', { name: /EN/i });

    // открытие выпадающего списка
    fireEvent.click(languageSelectorButton);

    // проверка наличия элементов в выпадающем списке
    const languageOptions = screen.getAllByRole('listitem');
    expect(languageOptions).toHaveLength(2); // ожидаем 2 варианта (RU и EN)

    // симуляция выбора языка
    fireEvent.click(languageOptions[1]); // выбор EN

    // проверка вызова функции обратного вызова
    expect(mockOnLanguageChange).toHaveBeenCalledWith('en');
  });
});
