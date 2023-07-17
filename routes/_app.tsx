/** @jsx h */
/** @jsxFrag Fragment */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <title>Brahim BIDI</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Brahim BIDI" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Brahim BIDI,CV, Deno,node, Development, JavaScript, TypeScript"
        />
        <link rel="stylesheet" href="/css/globals.css" />
        <link rel="stylesheet" href="/css/home.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />{" "}
      </Head>
      <Component />
    </div>
  );
}
