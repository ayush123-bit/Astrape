// components/ProductCard.jsx
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      {/* Image Section */}
      <div className="w-full h-40 relative">
        {!loaded && <Skeleton height={160} />}
        <img
          src={product.image || "https://via.placeholder.com/200"}
          alt={product.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-40 object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>

        <div className="flex justify-between items-center mt-auto pt-3">
          <span className="text-yellow-600 font-bold text-lg">
            ₹{product.price}
          </span>
          <button
            onClick={() => onAddToCart(product._id)}
            className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
