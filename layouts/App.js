import Head from "next/head";
import React from "react";

export default function App({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}
