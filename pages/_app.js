import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "@/global/theme";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
