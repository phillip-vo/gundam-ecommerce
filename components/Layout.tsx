import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";

type LayoutProps = {
  children: React.ReactNode;
};

const styles = {
  background: {
    backgroundColor: "#F5F5F5",
  },
};

function Layout({ children }: LayoutProps) {
  return (
    <div style={styles.background}>
      <Head>
        <title>Perfect Grade</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <Container>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </div>
  );
}

export default Layout;
