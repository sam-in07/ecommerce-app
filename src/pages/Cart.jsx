import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Cart is Empty</h2>
        <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={20} /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b py-4 last:border-0">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              {/* Bonus: Quantity Selector */}
              <div className="flex items-center border rounded-md">
                <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-100"><Minus size={16} /></button>
                <span className="px-4 font-medium">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-100"><Plus size={16} /></button>
              </div>
              
              <div className="font-bold text-lg min-w-[80px] text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              
              <button 
                onClick={() => removeFromCart(item.id)} 
                className="text-red-500 hover:text-red-700 p-2"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}

        <div className="mt-8 flex flex-col items-end border-t pt-6">
          <div className="text-2xl font-bold mb-4">
            Total: <span className="text-blue-600">${total.toFixed(2)}</span>
          </div>
          
          <div className="flex gap-4">
            {/* Bonus: Empty Cart Button */}
            <button 
              onClick={clearCart}
              className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
            >
              Clear Cart
            </button>
            <button className="px-8 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg transform active:scale-95 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;