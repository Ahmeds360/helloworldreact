import Head from "next/head";


export default function Home() {
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
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className=" text-7xl font-bold font-inter hover:text-9xl ease-in-out duration-300  ">Hello, World!</h1>
      </main>
    </>
  );
}
