import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from './Main';

const mockReviews = {
  '1': { name: 'John Doe', review: 'Great product!', date: '2024-07-20' },
  '2': { name: 'Jane Smith', review: 'Not bad', date: '2024-07-19' },
  '3': { name: 'John Doe', review: 'Great product!', date: '2024-07-20' },
  '4': { name: 'Jane Smith', review: 'Not bad', date: '2024-07-19' },
  '5': { name: 'John Doe', review: 'Great product!', date: '2024-07-20' },
  '6': { name: 'Jane Smith', review: 'Not bad', date: '2024-07-19' },
  '7': { name: 'John Doe', review: 'Great product!', date: '2024-07-20' },
  '8': { name: 'Jane Smith', review: 'Not bad', date: '2024-07-19' },
  '9': { name: 'John Doe', review: 'Great product!', date: '2024-07-20' },
  '10': { name: 'Jane Smith', review: 'Not bad', date: '2024-07-19' },
  '11': { name: 'John Doe', review: 'Great product!', date: '2024-07-20' },
  '12': { name: 'Jane Smith', review: 'Not bad', date: '2024-07-19' },
};

describe('Main Component', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  test('renders reviews and pagination', () => {
    render(<Main reviews={mockReviews} />);

    // проверка наличия отзывов
    const reviewItems = screen.getAllByRole('article');
    expect(reviewItems).toHaveLength(10); // первоначально должны отображаться только 10 отзывов

    // проверка наличия пагинации
    const pagination = screen.getByRole('navigation');
    expect(pagination).toBeInTheDocument();

    // проверка наличия кнопок пагинации
    const pageButtons = screen.getAllByRole('button', { name: /[1-9]/ }); // кнопки с номерами страниц
    expect(pageButtons).toHaveLength(2); // ожидается, что будет две кнопки: 1 и 2

    // проверка, что кнопка текущей страницы имеет класс 'page-link'
    expect(screen.getByText('1')).toHaveClass('page-link'); // кнопка первой страницы должна быть активной
  });

  test('paginates reviews correctly', () => {
    render(<Main reviews={mockReviews} />);

    // найдите и нажмите кнопку для перехода на следующую страницу
    const pageButton = screen.getByText('2'); // предполагаем, что кнопка для перехода на вторую страницу имеет текст "2"
    fireEvent.click(pageButton);

    // проверка, что после клика рендерятся следующие отзывы
    const reviewItems = screen.getAllByRole('article');
    expect(reviewItems).toHaveLength(2); // после перехода на вторую страницу должно отображаться 2 отзыва

    // также проверьте, что кнопка текущей страницы была обновлена
    expect(screen.getByText('2')).toHaveClass('page-link'); // кнопка текущей страницы должна быть активной
  });
});
