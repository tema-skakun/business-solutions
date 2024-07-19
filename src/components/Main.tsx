// src/components/Main.tsx
import React from 'react';
import { formatName } from '../utils/formatName';

interface Review {
  name: string;
  review: string;
  date: string;
}

interface MainProps {
  reviews: { [key: string]: Review };
}

const Main: React.FC<MainProps> = ({ reviews }) => {
  return (
    <div>
      {Object.keys(reviews).map((key) => {
        const { name, review, date } = reviews[key];
        return (
          <div key={key}>
            <h3>{formatName(name)}</h3>
            <p>{review}</p>
            <small>{date}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
