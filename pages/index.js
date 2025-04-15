import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>JBT Capital Management</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <main id="top" className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
        <header className="bg-[#193A2B] text-white py-6 px-6 flex flex-col items-center fixed top-0 left-0 right-0 z-50">
  <div className="flex items-center space-x-6">
    <a href="#top"><Image src={logo} alt="JBT Capital Management Logo" width={300} height={300} /></a>
    <span className="text-xl font-light">Navigating Global Opportunities</span>
  </div>
  <nav className="mt-4 space-x-8 text-lg font-medium">
    <a href="#about" className="hover:text-green-700 hover:bg-gray-100 transition duration-200 px-2 py-1 rounded">About</a>
    <a href="#performance" className="hover:text-green-700">Performance</a>
    <a href="#contact" className="hover:text-green-700">Contact</a>
  </nav>
</header>

        

        <section id="about" className="pt-64 py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg animate-fade-in">
           JBT Capital are experienced global macro investors deploying capital opportunistically to capture alpha around macro themes and events. While the geopolitical newsflow can seem relentless, we believe there has never been a more exciting time to invest in Global Macro. Across FX, rates, bonds and equities, we seek out the best opportunities for our investors.
          </p>
        </section>

        <hr className="border-t border-gray-300 mx-auto max-w-3xl" />

        <section id="performance" className="py-20 px-6 max-w-3xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Performance</h2>
            <p className="text-lg">
              Over the past 3 years, JBT Capital have generated a return of <strong>more than 50% annualy</strong> for our investors. While these have been extraordinary markets, we continue to see the Global Marco as a target-rich environment.
            </p>
          </div>
        </section>

        <hr className="border-t border-gray-300 mx-auto max-w-3xl" />

        <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="text-lg">
            <a href="mailto:info@jbtcap.com" className="text-green-900 underline hover:text-green-700 transition duration-200">
              info@jbtcap.com
            </a>
          </p>
        </section>

        <footer className="py-10 text-center text-sm text-white bg-[#193A2B] px-4">
          &copy; {new Date().getFullYear()} JBT CAPITAL MANAGEMENT. All rights reserved.
        <p className="mt-2">JBT Capital Management is a DBA of JBT Group LLC.</p>

          <div className="mt-4 space-x-6">
            <a href="/privacy" className="underline hover:text-green-300">Privacy Policy</a>
            <a href="/terms" className="underline hover:text-green-300">Terms of Use</a>
            <a href="/cookies" className="underline hover:text-green-300">Cookies</a>
            <a href="/disclosures" className="underline hover:text-green-300">Disclosures</a>
          </div>
        </footer>
      </main>
    </>
  );
}
