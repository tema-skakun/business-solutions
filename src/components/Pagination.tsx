// src/components/Pagination.tsx
import React from 'react';
import './Pagination.css';

interface PaginationProps {
  reviewsPerPage: number;
  totalReviews: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ reviewsPerPage, totalReviews, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
