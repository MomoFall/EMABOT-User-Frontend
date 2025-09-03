import { Assets } from '../../assets/Assets';
import { useNavigate } from 'react-router-dom';
import './Navbar2.css';
import { useStore } from '../StoreContext/StoreContext';
import { useEffect } from 'react';

function Navbar2() {

  const { cartItems } = useStore();
  const cartItemCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    console.log("Cart item count:", cartItemCount);
  }, [cartItemCount]);

  const navigate = useNavigate();

  const handleBasket = () => {
    navigate('/basket');
  }
  const handleHome = () => {
    navigate('/');
  }

  return (
    <div className="navbar2">
      <div className="navbar2-logo" onClick={handleHome} >
        <img src={Assets.logo} alt="Logo" />
        <span className="navbar2-title">EMA Bot</span>
      </div>
      <div className="navbar2-links">
        <p className="active" onClick={handleHome}>Accueil</p>
        <p onClick={handleHome} >Boutique</p>
        <div className="navbar2-cart">
          <img src={Assets.panier} alt="Panier" onClick={handleBasket} />
          {cartItemCount > 0 && <span className="navbar2-cart-count">{cartItemCount}</span>}
        </div>
      </div>
    </div>
  );
}

export default Navbar2;