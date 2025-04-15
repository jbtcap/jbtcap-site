import Head from 'next/head';

export default function Disclosures() {
  return (
    <>
      <Head>
        <title>Disclosures | JBT Capital Management</title>
      </Head>
      <main className="min-h-screen bg-white text-gray-900 font-sans px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Disclosures</h1>
        <p className="mb-4">JBT Group LLC provides this website for informational purposes only. Nothing on this site constitutes investment advice, a recommendation, or an offer to buy or sell any securities.</p>
        <p className="mb-4">Past performance is not indicative of future results. Investments are subject to market risks including the potential loss of principal.</p>
        <p className="mb-4">Please consult a qualified financial adviser before making any investment decisions.</p>
      </main>
    </>
  );
}
