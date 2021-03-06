import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { Products } from '../shared/interface';
import Head from 'next/head';
import { Header, SalesStats } from '../components';
import { callApi } from '../helpers/apiCalls';

const StatsPage: NextPage<Products> = () => {
  const [frequentProducts, setFrequentProducts] = useState<[]>([]);
  const [uniqueProducts, setUniqueProducts] = useState<[]>([]);
  const [fiveDaysSales, setFiveDaysSales] = useState<[]>([]);
  useEffect(() => {
    callApi('getTopProducts', 'GET').then(
      ({ data: { frequentProducts, uniqueProducts, fiveDaysSales } }) => {
        setFrequentProducts(frequentProducts);
        setUniqueProducts(uniqueProducts);
        setFiveDaysSales(fiveDaysSales);
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Statistics Page</title>
        <meta name='description' content='Statistics Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='container d-flex justify-content-around align-items-center align-middle '>
        <SalesStats productsOrSales={frequentProducts} title='Top 5 Products' />
        <SalesStats
          productsOrSales={uniqueProducts}
          title='Top 5 Unique Products'
        />
        <SalesStats productsOrSales={fiveDaysSales} title='Last 5 Days Sales' />
      </div>
    </>
  );
};

export default StatsPage;
