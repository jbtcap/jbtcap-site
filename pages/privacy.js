import Head from 'next/head';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | JBT Capital Management</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 font-sans px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
        <p className="mb-4">JBT Group LLC respects your privacy. We are committed to protecting the personal information you share with us. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information.</p>
        <p className="mb-4">We do not sell your personal information to third parties. We may collect personal information that you provide directly to us, such as when you communicate with us via email.</p>
        <p className="mb-4">By using our website, you consent to the practices described in this policy.</p>
      </main>
    </>
  );
}
