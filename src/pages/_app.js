import "@/styles/globals.css";
import { robotoFont } from "@/utils/fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${robotoFont.style.fontFamily};
          color: #333;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
