import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use | JBT Capital Management</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 font-sans px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Terms of Use</h1>
        <p className="mb-4">By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        <p className="mb-4">JBT Group LLC reserves the right to modify these terms at any time without prior notice. Your continued use of the site constitutes your acceptance of any such changes.</p>
        <p className="mb-4">All content on this website is provided for informational purposes only and does not constitute investment advice.</p>
      </main>
    </>
  );
}
