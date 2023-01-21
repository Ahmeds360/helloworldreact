import Head from "next/head";
import { BsFillMoonFill } from 'react-icons/bs';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Hello, World!</title>
        <meta
          name="description"
          content="Made by Lestey INC. And Astatide LLC."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <BsFillMoonFill className="absolute top-0 right-0 m-4 text-4xl" /> */}

      <main className="flex flex-col items-center justify-center h-screen dark:bg-black">
        <h1 className=" text-5xl font-bold font-inter hover:text-6xl ease-in-out duration-300 md:text-7xl md:hover:text-9xl dark:text-white">
          Hello, World!
        </h1>
      </main>
    </>
  );
}
