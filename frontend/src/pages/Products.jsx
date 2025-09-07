import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../utils/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/items", {
        params: {
          category: category || undefined,
          minPrice: minPrice || undefined,
          maxPrice: maxPrice || undefined,
          search: search || undefined,
        },
      });
      setProducts(data);
    } catch (err) {
      toast.error("Failed to load products");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  const applyFilters = () => {
    fetchProducts();
  };

  const addToCart = async (productId) => {
    try {
      await api.post("/cart", { productId, quantity: 1 });
      toast.success("Added to cart!");
    } catch (err) {
      toast.error("Failed to add to cart");
    }
  };

  if (loading) return <Loader loading={loading} />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-4 items-center">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-md focus:ring focus:ring-yellow-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded-md focus:ring focus:ring-yellow-400"
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Home">Home</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="w-28 border px-3 py-2 rounded-md focus:ring focus:ring-yellow-400"
        />

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="w-28 border px-3 py-2 rounded-md focus:ring focus:ring-yellow-400"
        />

        <button
          onClick={applyFilters}
          className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          Apply
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((p) => (
            <ProductCard key={p._id} product={p} onAddToCart={addToCart} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
