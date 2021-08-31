import React, { useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import type { Product, Products } from '../shared/interface';
import { getAllProducts } from './api/products';
import { Header, AdminTable, EditProductModal } from '../components';

interface AdminPageProps extends Products {
  initProducts: Products;
}

const AdminPage: NextPage<AdminPageProps> = ({ initProducts }) => {
  const [products, setProducts] = useState<Products>(initProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [showModal, toggleShowModal] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Admin Page</title>
        <meta name='description' content='Admin Page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header showModal={toggleShowModal} />
      <EditProductModal
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

export async function getStaticProps() {
  const allProducts = await getAllProducts();

  if (!allProducts) return { notFound: true };

  return {
    props: {
      initProducts: JSON.parse(JSON.stringify(allProducts)),
    },
    revalidate: 600,
  };
}

export default AdminPage;
