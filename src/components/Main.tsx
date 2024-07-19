import React, { useState, useEffect } from 'react';
import { formatName } from '../utils/formatName';
import Pagination from './Pagination';
import './Main.css';

interface Review {
  name: string;
  review: string;
  date: string;
}

interface MainProps {
  reviews: { [key: string]: Review };
}

const REVIEWS_PER_PAGE = 10;

const Main: React.FC<MainProps> = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? Number(savedPage) : 1;
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const reviewKeys = Object.keys(reviews);
  const totalReviews = reviewKeys.length;

  const indexOfLastReview = currentPage * REVIEWS_PER_PAGE;
  const indexOfFirstReview = indexOfLastReview - REVIEWS_PER_PAGE;
  const currentReviews = reviewKeys.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="main">
      {currentReviews.map((key) => {
        const { name, review, date } = reviews[key];
        return (
          <div className="item" key={key}>
            <h3>{formatName(name)}</h3>
            <p>{review}</p>
            <small>{date}</small>
          </div>
        );
      })}
      <Pagination
        reviewsPerPage={REVIEWS_PER_PAGE}
        totalReviews={totalReviews}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Main;
