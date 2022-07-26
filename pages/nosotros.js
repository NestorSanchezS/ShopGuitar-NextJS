import Image from "next/image";
import React from "react";
import { Layout } from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

export const Nosotros = () => {
  return (
    <Layout page="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt tempor consectetur. Proin feugiat non tortor
              quis facilisis. Fusce non pharetra ante. Morbi eu ipsum lorem.
              Nullam feugiat ipsum vitae est ullamcorper, egestas tempor ex
              euismod. Etiam volutpat urna vel posuere venenatis. Sed facilisis
              quis nibh ut blandit. Etiam bibendum fermentum massa, a aliquet
              est pellentesque a. Mauris sit amet rhoncus eros. Suspendisse
              egestas vulputate ligula fermentum efficitur. Nam eget mauris eget
              mauris auctor pulvinar id eget turpis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tincidunt tempor consectetur. Proin feugiat non tortor
              quis facilisis. Fusce non pharetra ante. Morbi eu ipsum lorem.
              Nullam feugiat ipsum vitae est ullamcorper, egestas tempor ex
              euismod. Etiam volutpat urna vel posuere venenatis. Sed facilisis
              quis nibh ut blandit. Etiam bibendum fermentum massa, a aliquet
              est pellentesque a. Mauris sit amet rhoncus eros. Suspendisse
              egestas vulputate ligula fermentum efficitur. Nam eget mauris eget
              mauris auctor pulvinar id eget turpis.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
