import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Cats???</title>
      </Head>
      <main>
        <aside>
          <h1>This will be the navbar i guess</h1>
        </aside>
        {children}
      </main>
    </>
  );
}
