import { use } from 'react';
import './DescPopup.css';
import { useStore } from '../StoreContext/StoreContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;


function DescPopup({ articleId }) {
    const [article, setArticle] = useState([]);
    const { setDescription } = useStore();

    const onClose = () => {
        setDescription(false);
    };

    useEffect(() => {
      const fetchArticles = async (articleId) => {
        try {
            const response = await axios.get(`${apiUrl}/api/articles/getarticle/${articleId}`);
            setArticle(response.data.article);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    fetchArticles(articleId);
}, [articleId]);

console.log("Fetched article:", article);

  return (
    <div className="desc-popup-overlay">
      <div className="desc-popup">
        <div className="desc-popup-header">
          <h2>Description du produit</h2>
          <span className="desc-popup-close" onClick={onClose}>×</span>
        </div>
        <div className="desc-popup-content">
        {article && (
            <div className="desc-popup-item">
                <h3>{article.name}</h3>
                <img src={`http://localhost:9123/uploads/${article.image}`} alt={article.name} />
                <p>{article.description}</p>
            </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default DescPopup;