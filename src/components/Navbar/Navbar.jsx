import { use } from 'react';
import { Assets } from '../../assets/Assets';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const navigate = useNavigate();

  const handleBasket = () => {
    navigate('/basket');
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={Assets.logo} alt="Logo" />
        <span className="navbar-title">EMA Bot</span>
      </div>
      <div className="navbar-links">
        <p className="active">Accueil</p>
        <p>Boutique</p>
        <div className="navbar-cart">
          <img src={Assets.panier} alt="Panier" onClick={handleBasket} />
          {/*<span className="cart-badge">0</span>*/}
        </div>
      </div>
    </div>
  );
}

export default Navbar;