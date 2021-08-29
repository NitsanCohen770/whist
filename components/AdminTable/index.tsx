import * as React from 'react';
import { Button } from '../';
import { Product, Products } from '../../shared/interface';

interface AdminTableProps extends Products {
  setProducts: React.Dispatch<React.SetStateAction<Products>>;
  toggleShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
}

export const AdminTable: React.FC<AdminTableProps> = ({
  products,
  setProducts,
  toggleShowModal,
  setSelectedProduct: setSelectedProduct,
}) => {
  const editProductHandler = (selectedProduct: Product) => {
    setSelectedProduct(selectedProduct);
    toggleShowModal(true);
  };

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
          <tr key={product._id}>
            <td>{product.title}</td>
            <td>$ {product.price}</td>
            <td className='d-flex flex-row justify-content-evenly'>
              <Button
                clickHandler={() => deleteProductHandler(product._id)}
                type='danger'
                label='Delete'
              />
              <Button
                clickHandler={() => editProductHandler(product)}
                type='primary'
                label='Edit'
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
