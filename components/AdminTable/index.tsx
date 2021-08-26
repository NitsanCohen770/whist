import * as React from 'react';
import { Button } from '../';
import { Products } from '../../shared/interface';

interface AdminTableProps extends Products {
  setProducts: React.Dispatch<React.SetStateAction<Products>>;
}

export const AdminTable: React.FC<AdminTableProps> = ({
  products,
  setProducts,
}) => {
  const [show, toggleShow] = React.useState<boolean>(false);

  const deleteProductHandler = productId => {
    fetch('http://localhost:3000/api/products', {
      method: 'DELETE',
      body: productId,
    })
      .then(response => response.json())
      .then(({ data }) => setProducts(data));
  };

  return (
    <table className='table'>
      <thead>
        <tr>
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
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td className='d-flex flex-row justify-content-evenly'>
              <Button
                clickHandler={() => deleteProductHandler(product._id)}
                type='danger'
                label='Delete'
              />
              <Button type='primary' label='Edit' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
