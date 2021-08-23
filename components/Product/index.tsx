import React from 'react';
import Image from 'next/image';
import { Button } from '../';
import { Product as ProductIF } from '../../shared/interface';

interface ProductProps extends ProductIF {
  image?: string | StaticImageData;
}

export const Product: React.FC<ProductProps> = ({
  title,
  description,
  price,
  image,
  url,
}) => {
  return (
    <div className='col-sm d-flex'>
      <div className='card' style={{ width: '15rem' }}>
        <div>
          <Image
            src={image || url}
            width={10}
            height={10}
            layout='responsive'
            alt={title}
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <div className='card-text bold'>{price}</div>
          <div className='text-center'>
            <Button type='primary' label='Buy' />
          </div>
        </div>
      </div>
    </div>
  );
};
