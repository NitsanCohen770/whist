import React from 'react';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { Button } from '../';
import { Order, OrderItem, Product as ProductIF } from '../../shared/interface';
import { orderState } from '../../recoil/atmos/order';

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
  const [order, setOrder] = useRecoilState(orderState);

  const addProductHandler = (product: OrderItem) => {
    const existItem = order.find(item => item.title === product.title);

    if (existItem) {
      const existItemIndex = order.findIndex(
        item => item.title === product.title
      );

      const updatedExistItem = {
        ...existItem,
        quantity: existItem.quantity + 1,
      };
      return setOrder((prevOrder): OrderItem[] => {
        const updatedOrder = [...prevOrder];
        updatedOrder[existItemIndex] = updatedExistItem;
        return updatedOrder;
      });
    }
    return setOrder((prevOrder): OrderItem[] => [...prevOrder, product]);
  };

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
            <Button
              clickHandler={() =>
                addProductHandler({
                  title,
                  url,
                  description,
                  price,
                  quantity: 1,
                })
              }
              type='primary'
              label='Buy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
