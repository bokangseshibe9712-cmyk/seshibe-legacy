'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 text-gray-900">
      <section className="py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Seshibe Legacy
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium">
          Building Powerful Digital Foundations for Ambitious Businesses.
        </p>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10 leading-relaxed">
          I help ambitious small businesses establish a strong online presence through strategic website design, brand identity development, and smart digital growth solutions.
        </p>
        <a
          href="https://wa.me/27627638928"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          Start Your Project
        </a>
      </section>

      <section className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Website Design & Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              High-performing, responsive websites built to convert visitors into paying customers.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600">
              Brand Identity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Professional logos, brand colors, and visual systems that position your business for credibility and growth.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
              Digital Growth Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Google Business setup, online visibility optimization, and ongoing strategic digital support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            About Seshibe Legacy
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Seshibe Legacy is built on the belief that every business deserves a professional and powerful digital presence. My mission is to help entrepreneurs transform their ideas into lasting digital assets that drive real results.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Let’s Build Your Legacy
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Ready to elevate your business online? Let’s create something impactful together.
        </p>
        <a
          href="https://wa.me/27627638928"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      <footer className="py-10 text-center text-gray-500">
        <p className="mb-2">© {new Date().getFullYear()} Seshibe Legacy</p>
        <p className="text-sm">Modern Digital Solutions for Ambitious Businesses</p>
      </footer>
    </div>
  )
}
