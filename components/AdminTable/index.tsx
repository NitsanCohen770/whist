import * as React from 'react';
import { Button } from '../';
import { Products } from '../../shared/interface';

export const AdminTable: React.FC<Products> = ({ products }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Title</th>
          <th scope='col'>Price</th>
          <th scope='col' className='d-flex flex-row justify-content-center'>
            Option
          </th>
        </tr>
      </thead>
      <tbody>
        {products?.map(product => (
          <tr key={product.id}>
            <th scope='row'>{product.id}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td className='d-flex flex-row justify-content-evenly'>
              <Button type='danger' label='Delete' />
              <Button type='primary' label='Edit' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
