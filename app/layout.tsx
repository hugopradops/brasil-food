import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brazilian Flavors Store",
  description: "Discover authentic Brazilian food in Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="bg-white text-black p-6 fixed top-0 left-0 w-full z-50 shadow-md flex items-center">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Brazilian Flavors 💚</h1>
            <ul className="flex gap-6">
              <li>
                <a href="/" className="hover:underline hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline hover:text-green-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-green-600">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Welcome Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/brazilian-food.png')",
            animation: "fadeIn 2s ease-in-out",
          }}
        >
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center max-w-md">
            <h1 className="text-3xl font-bold mb-4">
              Welcome to Brazilian Flavors in Canada! 🍁
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Discover the authentic taste of Brazil right here in Canada. From
              pão de queijo to feijoada, we bring the best of Brazilian cuisine
              to your table.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="#products"
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Explore Products
              </a>
              <a
                href="#about"
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto p-4">
          {/* Products Section */}
          <section id="products" className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold">Pão de Queijo</h3>
                <p className="text-gray-700">Cheese bread</p>
                <p className="text-green-600 font-bold">$5.00</p>
              </div>
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold">Feijoada</h3>
                <p className="text-gray-700">Traditional black bean stew</p>
                <p className="text-green-600 font-bold">$15.00</p>
              </div>
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold">Brigadeiro</h3>
                <p className="text-gray-700">Chocolate truffle</p>
                <p className="text-green-600 font-bold">$3.00</p>
              </div>
              <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-bold">Coxinha</h3>
                <p className="text-gray-700">Chicken croquette</p>
                <p className="text-green-600 font-bold">$4.00</p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mt-16">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              Brazilian Flavors is dedicated to bringing the authentic taste of
              Brazil to Canada. From traditional recipes to modern twists, we
              celebrate the rich culinary heritage of Brazil. Join us on this
              flavorful journey!
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Brazilian Flavors. All rights reserved.</p>
            <p>
              Follow us on{" "}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Facebook
              </a>
              .
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}