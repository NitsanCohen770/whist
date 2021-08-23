import React from 'react';
import mockData from '../../data/MOCK_DATA.json';

interface Product {
  id: number;
  title: string;
  price: string;
  url: string;
}

interface AdminTableProps {}

export const AdminTable: React.FC<AdminTableProps> = () => {
  const data: Product[] = mockData;
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
        {data.map(product => (
          <tr key={product.id}>
            <th scope='row'>{product.id}</th>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
              <button>Delete</button>
              <button>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
