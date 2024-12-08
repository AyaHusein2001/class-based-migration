import { ThemeProvider } from "@emotion/react";
import theme from "@/global/theme";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  
  return   <ThemeProvider theme={theme}> <Component {...pageProps} /></ThemeProvider>;
}

