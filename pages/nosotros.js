import React from "react";
import Link from "next/link";
import { Layout } from "../components/Layout";

export const Nosotros = () => {
  return (
    <Layout page="Nosotros">
      <h1>Nosotros</h1>
      <Link href="/">Ir a inicio</Link>
    </Layout>
  );
};

export default Nosotros;
