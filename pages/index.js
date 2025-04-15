
export default function HomePage() {
  return (
    <main className="min-h-screen bg-green-950 text-gray-100 font-sans">
      <section className="py-24 px-6 text-center bg-green-900">
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
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded" />
          <textarea placeholder="Message" rows="5" className="border p-3 rounded"></textarea>
          <button type="submit" className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400 border-t">
        &copy; {new Date().getFullYear()} JBT CAPITAL MANAGEMENT. All rights reserved.
      </footer>
    </main>
  );
}
