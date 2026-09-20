import { Provider } from "@/components/ui/provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

/**
 * Next.js uses the `App` component to initialize pages.
 * You can override it and control the page initialization and:
 *
 * - Create a shared layout between page changes
 * - Inject additional data into pages
 * - Add global CSS
 *
 * @see {@link https://nextjs.org/docs/pages/building-your-application/routing/custom-app}
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
