import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>JBT Capital Management</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      <main className="min-h-screen bg-green-950 text-gray-100 font-sans">
        <section className="py-24 px-6 text-center bg-green-900">
          <div className="flex justify-center mb-6">
            <Image src={logo} alt="JBT Capital Management Logo" width={120} height={120} />
          </div>
          <h1 className="text-4xl font-bold mb-4">JBT CAPITAL MANAGEMENT</h1>
          <p className="text-xl">Creating extraordinary returns amid global volatility</p>
        </section>

        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            We are experienced global macro investors deploying capital opportunistically to capture alpha around macro themes and events.
          </p>
        </section>

        <section className="py-16 px-6 bg-green-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Our Performance</h2>
            <p className="text-lg">
              Over the past 3 years, we have returned more than <strong>55% per year</strong> to our investors.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg">
            <a href="mailto:info@jbtcap.com" className="text-green-300 underline hover:text-green-400">
              info@jbtcap.com
            </a>
          </p>
        </section>

        <footer className="py-6 text-center text-sm text-gray-400 border-t">
          &copy; {new Date().getFullYear()} JBT CAPITAL MANAGEMENT. All rights reserved.
        </footer>
      </main>
    </>
  );
}
