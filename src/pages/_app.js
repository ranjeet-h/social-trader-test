import "@/styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <div className="bg-[rgba(249,249,249,1)] h-screen">
        <Component {...pageProps} />
        </div>
      </Theme>
    </>
  );
}
