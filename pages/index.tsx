import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, ProductList } from '../components';
import { Products } from '../shared/interface';
import { useEffect, useState } from 'react';
import { callApi } from '../helpers/apiCalls';

const Home: NextPage<Products> = () => {
  const [products, setProducts] = useState<Products>();

  useEffect(() => {
    callApi('products', 'GET').then(({ data }) => setProducts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Main Products Page</title>
        <meta name='description' content='Main Products Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
