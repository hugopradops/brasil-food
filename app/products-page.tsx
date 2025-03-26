import Image from "next/image";

export default function Products() {
  const ProductsItems = [
    { name: "Pão de Queijo", description: "Cheese bread", price: "$5.00", image: "/images/prato-feito.png" },
    { name: "Feijoada", description: "Traditional black bean stew", price: "$15.00", image: "/images/tipica.png" },
    { name: "Brigadeiro", description: "Chocolate truffle", price: "$3.00", image: "/images/brigadeiro.png" },
    { name: "Coxinha", description: "Chicken croquette", price: "$4.00", image: "/images/pao-de-queijo.png" },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {ProductsItems.map((item, index) => (
          <li
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-lg font-bold mt-2">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}