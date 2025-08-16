import { emaBotProducts, Assets } from "../../assets/Assets"
import './Store.css';
import { useStore } from "../../components/StoreContext/StoreContext";


function Store() {

  const { addToCart } = useStore();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="store">
        <h2 className="store-title">Nos produits</h2>
        <div className="store-items">
            {emaBotProducts.map((product) => (
                <div key={product.id} className="store-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <div className="store-item-description">
                        <p>Description</p>
                        <img src={Assets.info} alt="Info" className="info-icon" />
                    </div>
                    <span>{product.price} €</span>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
                </div>
            ))} 
        </div>
    </div>
  )
}

export default Store
