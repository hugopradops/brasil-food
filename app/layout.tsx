import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import ImageModal from "./ImageModal";

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
  const ProductsItems = [
    { name: "Pão de Queijo", description: "Cheese bread", price: "$5.00", image: "/images/pao-de-queijo.png" },
    { name: "Brigadeiro", description: "Chocolate truffle", price: "$3.00", image: "/images/brigadeiro.png" },
    { name: "Feijoada", description: "Traditional black bean stew", price: "$15.00", image: "/images/tipica.png" },
    { name: "Picanha", description: "Grilled beef with rice and vegetables", price: "$20.00", image: "/images/prato-feito.png" },
    { name: "Açaí", description: "Refreshing açaí bowl with granola and fruits", price: "$7.00", image: "/images/acai.jpg" },
    { name: "Guaraná Antarctica", description: "Popular Brazilian soda", price: "$2.50", image: "/images/guarana.jpg" },
  ];

  return (
    <html lang="en">
      <body className="antialiased">
        {/* Header */}
        <header className="bg-white text-black p-6 fixed top-0 left-0 w-full z-50 shadow-md flex items-center">
          <nav className="container mx-auto flex flex-wrap justify-between items-center">
            <h1 className="text-2xl font-bold">Brazilian Flavors 💚</h1>
            <ul className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <li>
                <a href="/" className="hover:underline hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#products-title" className="hover:underline hover:text-green-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#about-title" className="hover:underline hover:text-green-600">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Welcome Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/brazilian-food.jpg')",
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
                href="#products-title" // Ensure this matches the header link
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Explore Products
              </a>
              <a
                href="#about-title"
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
              >
                Learn More About Us
              </a>
              <a
                href="https://www.google.com/maps?q=123+Flavor+Street,+Kitchener,+ON,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
              >
                123 Flavor Street, Kitchener, ON, Canada.
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="container mx-auto">
          <h1
            id="products-title"
            className="text-3xl font-bold text-green-600 text-center mt-24 mb-16 px-6 py-4"
            style={{ scrollMarginTop: "6rem" }} // Add scroll margin to offset the fixed header
          >Menu Items
          </h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ProductsItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-center border p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <ImageModal src={item.image} alt={item.name} />
                <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-lg font-bold mt-2">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mt-64 container mx-auto px-8 py-12"
        >
          <h2
            id="about-title"
            className="text-3xl font-bold mb-8 text-center text-green-600 px-6 py-4"
            style={{ scrollMarginTop: "6rem" }} // Add scroll margin to offset the fixed header
          >
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
            Brazilian Flavors is dedicated to bringing the authentic taste of Brazil to
            Canada. From traditional recipes to modern twists, we celebrate the rich
            culinary heritage of Brazil. Join us on this flavorful journey!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/the-other.jpg" // Replace with the correct path for the new image
                alt="Rio de Janeiro"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <Image
                src="/images/rio-de-janeiro.jpg" // Replace with the correct path for the first image
                alt="New Brazilian scenery"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div>
              <Image
                src="/images/restaurante2.jpg" // Replace with the correct path for the second image
                alt="People enjoying food"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto p-4">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 mt-12">
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
            <p className="mt-4">
              <a
                href="https://www.google.com/maps?q=123+Flavor+Street,+Kitchener,+ON,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline"
              >
                Visit us at: 123 Flavor Street, Kitchener, ON, Canada.
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}