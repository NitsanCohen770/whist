import React from 'react';
import { useEffect } from 'react';

interface SalesStatsProps {
  title: string;
  productsOrSales?: [];
}

export const SalesStats: React.FC<SalesStatsProps> = ({
  title,
  productsOrSales,
}) => {
  useEffect(() => {
    fetch('http://localhost:3000/api/getTopProducts')
      .then(response => response.json())
      .then(res => console.log(res));
  }, []);

  return (
    <div className='card text-center' style={{ width: '15rem' }}>
      <div className='card-header'>{title}</div>
      <div className='card-body'>
        <ul className='list-group list-group-flush '>
          <li className='list-group-item'>An item</li>
          <li className='list-group-item'>A second item</li>
          <li className='list-group-item'>A third item</li>
          <li className='list-group-item'>A third item</li>
          <li className='list-group-item'>A third item</li>
        </ul>
      </div>
    </div>
  );
};
