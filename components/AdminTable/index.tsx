import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../';
import { Products } from '../../shared/interface';

export const AdminTable: React.FC<Products> = ({ products }) => {
  const [productsData, setProductsData] = useState<Products>();

  useEffect(() => {
    axios
      .get('https://my.api.mockaroo.com/whist.json?key=8887ef10')
      .then(({ data }) => {
        setProductsData(data);
      });
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Title</th>
          <th scope='col'>Price</th>
          <th scope='col'>Option</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <th scope='row'>{product.id}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <Button type='danger' label='Delete' />
              <Button type='primary' label='Edit' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
