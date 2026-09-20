import { Html, Head, Main, NextScript } from "next/document";

/**
 * A custom `Document` can update the `<html>` and `<body>` tags used to render a Page.
 */
export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
