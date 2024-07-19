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
  const totalPages = Math.ceil(totalReviews / reviewsPerPage);
  const pageNumbers = [];
  const displayRange = 2;

  const isStart = currentPage <= displayRange + 2;
  const isEnd = currentPage >= totalPages - displayRange - 1;

  if (isStart) {
    for (let i = 1; i <= Math.min(displayRange * 2 + 1, totalPages); i++) {
      pageNumbers.push(i);
    }
    if (totalPages > displayRange * 2 + 1) {
      pageNumbers.push('...', totalPages);
    }
  } else if (isEnd) {
    pageNumbers.push(1, '...');
    for (let i = Math.max(1, totalPages - displayRange * 2); i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1, '...');
    for (let i = currentPage - displayRange; i <= currentPage + displayRange; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push('...', totalPages);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li key={index} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            {typeof number === 'number' ? (
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            ) : (
              <span className="page-ellipsis">{number}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
