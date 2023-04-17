import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Karla } from "next/font/google";

const font = Karla({
  subsets: ["latin-ext"],
  variable: "--sans-serif",
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.variable}>
      <Component {...pageProps} />
    </main>
  );
}
