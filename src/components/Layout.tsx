import Navbar from './Navbar';
import React from 'react';
import Head from 'next/head';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/portfolio/favicon.ico' />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}