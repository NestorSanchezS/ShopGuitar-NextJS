import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <Layout page="Inicio">
      <h1>Desde inicio</h1>
      <Link href="/nosotros">Ir a nosotros</Link>
    </Layout>
  );
}
