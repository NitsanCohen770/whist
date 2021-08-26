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
    <div className='d-flex flex-row justify-content-center'>
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
        <div className='card-body d-flex flex-column justify-content-between'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <div className='card-text bold'>{price}</div>
          <div className='d-flex justify-content-center'>
            <Button type='primary' label='Buy' />
          </div>
        </div>
      </div>
    </div>
  );
};
