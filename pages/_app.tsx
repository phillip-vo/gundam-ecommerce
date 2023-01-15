import type { AppProps } from "next/app";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import { StateContextProvider } from "../context/StateContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContextProvider>
  );
}
