import React from 'react';

interface SalesStatsProps {
  title: string;
  productsOrSales?: [];
}

export const SalesStats: React.FC<SalesStatsProps> = ({
  title,
  productsOrSales,
}) => {
  return (
    <div
      className='card text-center'
      style={{ width: '15rem', minHeight: '25rem' }}>
      <div className='card-header'>{title}</div>
      <div className='card-body'>
        <ul className='list-group list-group-flush '>
          {productsOrSales.map((product: any, index) => {
            console.log(product);
            return (
              <li key={product._id} className='list-group-item'>
                {product._id || `Day ${index + 1}`} :{' '}
                {product.count ||
                  product.total ||
                  product.value[0]?.totalValue ||
                  0}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
