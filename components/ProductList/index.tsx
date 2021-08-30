import React from 'react';
import { Product } from '..';
import { Products } from '../../shared/interface';

export const ProductList: React.FC<Products> = ({ products }) => {
  return (
    <div className='container  content-row'>
      <div className='row row-cols-1 row-cols-md-3 g-4 '>
        {products?.map(({ title, description, url, price, _id }) => (
          <Product
            key={_id}
            title={title}
            description={description}
            price={price}
            url={url}
            _id={_id}
          />
        ))}
      </div>
    </div>
  );
};
