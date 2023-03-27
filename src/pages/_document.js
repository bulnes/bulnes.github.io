import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />

      <body className="h-screen bg-stone-200">
        <div className="mx-3 md:mx-auto max-w-2xl">
          <Main />
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
