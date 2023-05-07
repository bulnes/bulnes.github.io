import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />

      <body className="bg-background">
        <div className="max-w-content mx-auto px-8 pb-0 pt-16">
          <Main />
        </div>

        <NextScript />
      </body>
    </Html>
  );
}
