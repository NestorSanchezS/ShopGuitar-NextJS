import React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children, page }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {page}</title>
        <meta name="description" content="Sitio web de ventas de guitarras" />
        <meta rel="icon" hred="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
