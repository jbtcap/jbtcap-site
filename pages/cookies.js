import Head from 'next/head';

export default function Cookies() {
  return (
    <>
      <Head>
        <title>Cookies Policy | JBT Capital Management</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 font-sans px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Cookies Policy</h1>
        <p className="mb-4">This website uses cookies to enhance your experience and provide necessary functionality. By continuing to use this site, you agree to our use of cookies.</p>
        <p className="mb-4">Cookies are small data files stored on your device. We may use them to understand how you interact with our site and improve our services accordingly.</p>
        <p className="mb-4">You may disable cookies through your browser settings, but some features of the site may not function properly as a result.</p>
      </main>
    </>
  );
}
