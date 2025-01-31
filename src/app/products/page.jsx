import Link from "next/link";
import React from "react";

const ServicesPage = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2500,
      description:
        "High-quality noise-canceling wireless headphones with deep bass.",
      image: "https://via.placeholder.com/300x200?text=Headphones",
    },
    {
      id: 2,
      name: "Smartwatch Pro X",
      price: 4999,
      description:
        "Advanced smartwatch with heart rate monitor and GPS tracking.",
      image: "https://via.placeholder.com/300x200?text=Smartwatch",
    },
    {
      id: 3,
      name: "Gaming Keyboard",
      price: 3200,
      description:
        "Mechanical gaming keyboard with RGB backlight and fast response.",
      image: "https://via.placeholder.com/300x200?text=Keyboard",
    },
    {
      id: 4,
      name: "4K Action Camera",
      price: 8500,
      description:
        "Ultra HD 4K action camera with waterproof design and stabilization.",
      image: "https://via.placeholder.com/300x200?text=Camera",
    },
    {
      id: 5,
      name: "Portable Bluetooth Speaker",
      price: 1800,
      description:
        "Compact Bluetooth speaker with powerful bass and long battery life.",
      image: "https://via.placeholder.com/300x200?text=Speaker",
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 1200,
      description:
        "Ergonomic wireless mouse with smooth tracking and silent clicks.",
      image: "https://via.placeholder.com/300x200?text=Mouse",
    },
  ];

  // console.log(products);

  return (
    <div className="w-[90%] mx-auto">
       <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`}
            key={product.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden p-4 transition transform hover:scale-105"
          >
            <img
              className="w-full h-40 object-cover rounded-md"
              src={product.image}
              alt={product.name}
            />
            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>
              <p className="text-lg font-bold text-blue-500 mt-3">
                ৳{product.price}
              </p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
