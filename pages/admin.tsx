import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Admin: NextPage = () => {
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

export default Admin;
