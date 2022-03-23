import React from "react";
import Head from "next/head";

export default function Guest({ header, title, children }) {
  return (
    <div className="flex antialiased tracking-tighter text-gray-800 items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-1/3">
        <div className="bg-white  rounded-2xl outline-hidden border shadow-xl">
          <div className="px-6 py-3 border-b bg-gray-50/50">
            <h1 className="font-light text-3xl uppercase">{header}</h1>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
