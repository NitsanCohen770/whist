import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import type { Product, Products } from '../shared/interface';
import Head from 'next/head';
import { Header, AdminTable, EditProductModal } from '../components';

const AdminPage: NextPage<Products> = () => {
  const [products, setProducts] = useState<Products>();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [showModal, toggleShowModal] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(({ data }) => setProducts(data));
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <EditProductModal
        title='Edit Product'
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        product={selectedProduct}
        setProducts={setProducts}
        setSelectedProduct={setSelectedProduct}
      />
      <AdminTable
        products={products}
        setProducts={setProducts}
        toggleShowModal={toggleShowModal}
        setSelectedProduct={setSelectedProduct}
      />
      ;
    </>
  );
};

// export async function getStaticProps() {
//   const { data } = await axios.get('/api/products');

//   if (!data) return { notFound: true };

//   return {
//     props: {
//       products: data,
//     },
//     revalidate: 600,
//   };
// }

export default AdminPage;
