import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import AdminTable from '../components/AdminTable/index';

const Admin: NextPage = () => {
  return <AdminTable />;
};

export default Admin;
