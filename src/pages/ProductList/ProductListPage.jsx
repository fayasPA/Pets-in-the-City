import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice] = useState(1000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const titleMatches = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatches = selectedCategory === '' || product.category === selectedCategory;
      const priceMatches = product.price >= minPrice && product.price <= maxPrice;
      return titleMatches && categoryMatches && priceMatches;
    });
    setFilteredProducts(filtered);
  }, [products, searchQuery, selectedCategory, minPrice, maxPrice]);

  useEffect(() => {
    gsap.fromTo(
      '.product-card',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 }
    );
  }, [filteredProducts]);

  const handleSearch = () => {
    setSearchQuery(searchQuery.trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFilter = (category, minPrice, maxPrice) => {
    setSelectedCategory(category);
    setMinPrice(minPrice);
  };

  return (
    <div className="product-listing bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className=' flex justify-around'>
        <h1 className="text-4xl font-bold text-center text-white mb-8">Product Listing</h1>
        <Link to="/">
        <h1 className="text-2xl bg-slate-600 p-2 hover:bg-stone-500 rounded-lg font-bold text-center text-white mb-8">go to home</h1>
        </Link>
        </div>
        <div className="flex justify-between mb-4">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Search products"
              className="border rounded-md px-4 py-2 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              value={searchQuery}
            />
            <FaSearch
              className="absolute top-2 left-3 text-gray-500 cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <div className="flex space-x-4">
            <label htmlFor="category" className="text-white">Category:</label>
            <select id="category" value={selectedCategory} onChange={(e) => handleFilter(e.target.value, minPrice, maxPrice)} className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="">All</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
            <label htmlFor="min-price" className="text-white">Min Price:</label>
            <input
              type="number"
              id="min-price"
              value={minPrice}
              onChange={(e) => handleFilter(selectedCategory, Number(e.target.value), maxPrice)}
              className="border rounded-md px-4 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div className="product-card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between" key={product.id}>
              <div>
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-4 h-16 overflow-hidden">{product.description.slice(0, 50)}...</p>
                <p className="text-green-500 font-bold text-lg mb-4">${product.price}</p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                  Add to Cart
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
