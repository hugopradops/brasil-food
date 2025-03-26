import Image from "next/image";
import Products from "./products-page"; // Import the Menu component

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Products /> {/* Display the menu content directly */}
      <footer className="row-start-2 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Footer content removed */}
      </footer>
    </div>
  );
}