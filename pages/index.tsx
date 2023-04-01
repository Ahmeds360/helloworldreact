import Head from "next/head";
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
        <h1 className=" text-6xl font-bold font-inter hover:text-7xl ease-in-out duration-300 md:text-8xl md:hover:text-9xl sm:text-7xl sm:hover:text-8xl dark:text-white lg:text-[140px] lg:hover:text-[165px] xl:text-[200px] xl:hover:text-[215px] 2xl:text-[240px]  2xl:hover:text-[265px]">
          Hello, World!
        </h1>
      </main>
    </>
  );
}

//sec