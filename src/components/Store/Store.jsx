import { emaBotProducts, Assets } from "../../assets/Assets"
import './Store.css';
import { useStore } from "../StoreContext/StoreContext";
import { useEffect, useState } from "react";
import axios from "axios";
import DescPopup from "../DescPopup/DescPopup";
const apiUrl = import.meta.env.VITE_API_URL;


function Store() {
  const [articles, setArticles] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
  const { description, setDescription } = useStore();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/articles/getarticlesuser`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const { addToCart, cartItems } = useStore();
  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    addToCart(product);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  console.log("Cart items:", cartItems);
  console.log("addToCart function:", addToCart);

  const handleShowDescription = (id) => {
    setDescription(true);
    setSelectedId(id);
  };

  return (
    <>
    {description === true && selectedId && <DescPopup articleId={selectedId} />}
    <div className="store">
        <h2 className="store-title">Nos produits</h2>
        <div className="store-items">
            {articles.map((product) => (
                <div key={product.id} className="store-item">
                    <img src={`${apiUrl}/uploads/${product.image}`} alt={product.name} />
                    <h3>{product.name}</h3>
                    <div className="store-item-description">
                        <p>Description</p>
                        <img src={Assets.info} alt="Info" className="info-icon" onClick={() => handleShowDescription(product._id)} />
                    </div>
                    <span>{product.price} €</span>
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Ajouter au panier</button>
                </div>
            ))} 
        </div>
    </div>
    </>
  )
}

export default Store
