import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Karla, Lora, Karma } from "next/font/google";

const body = Karla({
  subsets: ["latin-ext"],
  variable: "--font-body",
  display: "auto",
});

const reading = Lora({
  subsets: ["latin-ext"],
  variable: "--font-reading",
  display: "auto",
});

const display = Lora({
  subsets: ["latin-ext"],
  variable: "--font-display",
  display: "auto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={[reading.variable, display.variable, body.variable].join(" ")}
    >
      <Component {...pageProps} />
    </main>
  );
}
