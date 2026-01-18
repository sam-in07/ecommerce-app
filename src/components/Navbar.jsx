import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2 hover:text-blue-200 transition">
          <Store /> TechStore
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:underline hidden sm:block">Home</Link>
          <Link to="/cart" className="relative flex items-center gap-1 hover:text-blue-200 transition">
            <ShoppingCart />
            <span className="font-semibold">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;