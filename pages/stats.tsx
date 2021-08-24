import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { NextPage } from 'next';
import type { Products } from '../shared/interface';
import Head from 'next/head';
import { AdminTable } from '../components/AdminTable/index';

const StatsPage: NextPage<Products> = ({ products }) => {
  return <AdminTable products={products} />;
};
// client side data fetching

export default StatsPage;
