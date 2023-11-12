import "@/styles/globals.css";
import "@/styles/styles.css";
import type { AppProps } from "next/app";
import BackToTopButton from "@/components/BackToTopButton"; 

export default function App({ Component, pageProps }: AppProps) {
  return <><Component {...pageProps} /><BackToTopButton /></>;
  
}
