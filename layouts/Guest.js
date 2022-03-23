import React from "react";
import Head from "next/head";

export default function Guest({ header, title,cardClassName, children }) {
  return (
    <div className="flex antialiased tracking-tighter text-gray-800 items-center justify-center min-h-screen md:bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${cardClassName ? cardClassName : 'lg:w-1/3'} w-full md:1/2`}>
        <div className="bg-white  md:rounded-2xl outline-hidden md:border md:shadow-xl">
          <div className="px-6 py-3 border-b bg-gray-50/50">
            <h1 className="font-medium capitalize">{header}</h1>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
      
    </div>
  );
}
