// src/components/Main.tsx
import React, { useState } from 'react';
import { formatName } from '../utils/formatName';
import Pagination from './Pagination';

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
  const [currentPage, setCurrentPage] = useState(1);
  const reviewKeys = Object.keys(reviews);
  const totalReviews = reviewKeys.length;

  const indexOfLastReview = currentPage * REVIEWS_PER_PAGE;
  const indexOfFirstReview = indexOfLastReview - REVIEWS_PER_PAGE;
  const currentReviews = reviewKeys.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {currentReviews.map((key) => {
        const { name, review, date } = reviews[key];
        return (
          <div key={key}>
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
