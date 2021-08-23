import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal } from '../components';
import type { NextPage } from 'next';
import type { Products } from '../shared/interface';
import Head from 'next/head';
import mockData from '../__mocks__/data/MOCK_DATA.json';
import { AdminTable } from '../components/AdminTable/index';

const Admin: NextPage = () => {
  const [productsData, setProductsData] = useState<Products>();

  useEffect(() => {
    axios
      .get('https://my.api.mockaroo.com/whist.json?key=8887ef10')
      .then(({ data }) => {
        setProductsData(data);
      });
  }, []);
  return <AdminTable products={mockData} />;
};

export default Admin;
