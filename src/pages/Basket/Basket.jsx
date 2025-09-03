import Navbar2 from '../../components/Navbar2/Navbar2';
import OrderPopup from '../../components/OrderPopup/OrderPopup';
import { useStore } from '../../components/StoreContext/StoreContext'
import './Basket.css'
const apiUrl = import.meta.env.VITE_API_URL;

function Basket() {
  const { cartItems, addToCart, removeFromCart, clearCart, setOrder } = useStore();
  const items = Object.values(cartItems);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleOrderClick = () => {
    setOrder(true);
  };

  return (
    <>
    
    <div className="basket">
      <Navbar2 />
      <h2 className="basket-title">Mon panier</h2>
      <div className="basket-content">
        <div className="basket-table">
          <div className="basket-table-header">
            <span>Articles</span>
          </div>
          {items.length === 0 ? (
            <div className="basket-empty">Votre panier est vide.</div>
          ) : (
            items.map(item => (
              <div key={item.id || item.name} className="basket-row">
                <div className="basket-item-info">
                  <img src={`${apiUrl}/uploads/${item.image}`} alt={item.name} />
                  <div>
                    <div className="basket-item-name">{item.name}</div>
                    <div className="basket-item-price">{item.price.toFixed(2)} €</div>
                  </div>
                </div>
                <div className="basket-qty">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <div className="basket-item-total">
                  {(item.price * item.quantity).toFixed(2)} €
                </div>
                <button className="basket-remove" onClick={() => removeFromCart({ ...item, quantity: 9999 })}>
                  Retirer
                </button>
              </div>
            ))
          )}
        </div>
        <div className="basket-summary">
          <h3>Résumé</h3>
          <div className="basket-summary-row">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <button className="basket-order-btn" onClick={items.length === 0 ? null : handleOrderClick} >Demander une commande</button>
          <button className="basket-clear-btn" onClick={clearCart}>Vider</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Basket