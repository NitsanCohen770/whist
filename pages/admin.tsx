import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import type { Products } from '../shared/interface';
import Head from 'next/head';
import { AdminTable } from '../components/AdminTable/index';

const AdminPage: NextPage<Products> = ({ products }) => {
  return <AdminTable products={products} />;
};

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://my.api.mockaroo.com/whist.json?key=8887ef10'
  );

  if (!data) return { notFound: true };

  return {
    props: {
      products: data,
    },
    revalidate: 600,
  };
}

export default AdminPage;
