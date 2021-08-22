import React from 'react';
import mockData from '../../data/MOCK_DATA.json';

interface AdminTableProps {}

const AdminTable: React.FC<AdminTableProps> = () => {
  const data: number = JSON.parse(mockData);
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
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <button>Delete</button>
            <button>Edit</button>
          </td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>
            <button style={{ marginRight: '10px' }}>Delete</button>
            <button>Edit</button>
          </td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminTable;
