import { useEffect, useState } from "react";
import api from "../utils/api";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";
import Loader from "../components/Loader";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const { data } = await api.get("/cart");
      setCart(data);
    } catch (err) {
      toast.error("Failed to load cart");
    }
    setLoading(false);
  };

  const removeFromCart = async (productId) => {
    try {
      await api.delete(`/cart/${productId}`);
      toast.success("Removed from cart");
      fetchCart();
    } catch (err) {
      toast.error("Failed to remove item");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <Loader loading={loading} />;

  const totalPrice = cart?.items?.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Your Cart
      </h2>

      {!cart?.items?.length ? (
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Your cart is empty. Start shopping now!
        </p>
      ) : (
        <>
        {/* Order Summary in single horizontal bar */}
<div className="flex flex-wrap items-center justify-between bg-yellow-100 dark:bg-gray-700 px-4 py-3 rounded-lg mb-6 shadow">
  <p className="text-gray-900 dark:text-gray-200 text-lg font-medium w-full sm:w-auto text-center sm:text-left">
    <span className="mr-6">
      <strong>Items:</strong> {cart.items.length}
    </span>
    <span>
      <strong>Total:</strong>{" "}
      <span className="text-yellow-600 font-bold">₹{totalPrice}</span>
    </span>
  </p>
</div>

          {/* Cart Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cart.items.map((item) => (
              <div
                key={item.productId._id}
                className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition"
              >
                {/* Dustbin Icon (top-right) */}
                <button
                  onClick={() => removeFromCart(item.productId._id)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-600"
                >
                  <FiTrash2 size={20} />
                </button>

                {/* Product Image */}
                <img
                  src={item.productId.image}
                  alt={item.productId.name}
                  className="w-32 h-32 object-cover rounded-lg mb-3"
                />

                {/* Product Info */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                  {item.productId.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Qty: {item.quantity}
                </p>
                <p className="text-yellow-500 font-bold text-lg">
                  ₹{item.productId.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
