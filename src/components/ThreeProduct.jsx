import React from 'react';
import { Link } from 'react-router-dom';

const ThreeProduct = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: './Assets/Images/petfood.png',
      link: '/products/1'
    },
    {
      id: 2,
      name: 'Product 2',
      image: './Assets/Images/petfood.png',

      link: '/products/2'
    },
    {
      id: 3,
      name: 'Product 3',
      image: './Assets/Images/petfood.png',
      link: '/products/3'
    }
  ];

  return (
    <> 
    <div className='mt-48 md:mt-20 '>
        <h1 className='text-center font-lora text-5xl font-semibold '>Our Products</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-8 ">
      {products.map((product) => (
        <Link to={product.link} key={product.id} className="block overflow-hidden">
          <div className="relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity"></div>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default ThreeProduct;
