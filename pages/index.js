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

      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <header className="bg-[#193A2B] text-white py-6 px-6 flex flex-col items-center fixed top-0 left-0 right-0 z-50">
  <div className="flex items-center space-x-6">
    <Image src={logo} alt="JBT Capital Management Logo" width={400} height={400} />
    <span className="text-xl font-light">Navigating Global Opportunities</span>
  </div>
  <nav className="mt-4 space-x-8 text-lg font-medium">
    <a href="#about" className="hover:text-green-700">About</a>
    <a href="#performance" className="hover:text-green-700">Performance</a>
    <a href="#contact" className="hover:text-green-700">Contact</a>
  </nav>
</header>


        </header>

        

        <section id="about" className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg">
           JBT Capital are experienced global macro investors deploying capital opportunistically to capture alpha around macro themes and events.
          </p>
        </section>

        <section id="performance" className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Performance</h2>
            <p className="text-lg">
              Over the past 3 years, we have returned more than <strong>55% per year</strong> to our investors.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg">
            <a href="mailto:info@jbtcap.com" className="text-green-900 underline hover:text-green-700">
              info@jbtcap.com
            </a>
          </p>
        </section>

        <footer className="py-8 text-center text-sm text-white bg-[#124437]">
          &copy; {new Date().getFullYear()} JBT CAPITAL MANAGEMENT. All rights reserved.
        </footer>
      </main>
    </>
  );
}
