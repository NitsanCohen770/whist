import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, ProductList } from '../components';
import { Products } from '../shared/interface';
import { useEffect, useState } from 'react';

const Home: NextPage<Products> = () => {
  const [products, setProducts] = useState<Products>();

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
