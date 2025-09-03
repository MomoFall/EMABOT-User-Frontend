import './OrderPopup.css';
import { useStore } from '../StoreContext/StoreContext';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = import.meta.env.VITE_API_URL;

function OrderPopup() {
    const { setOrder, cartItems, clearCart } = useStore();
    const items = Object.values(cartItems);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        items: cartItems,
        status: 'En attente',
        total: total
    });

    const handleClose = () => {
        setOrder(false);
    };

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const validateEmail = (email) => {
        // Expression régulière simple pour valider l'email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        // Accepte les numéros français et internationaux, 10 à 15 chiffres, espaces ou tirets optionnels
        return /^((\+\d{1,3}[- ]?)?\d{9,12})$/.test(phone.replace(/\s|-/g, ''));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone } = formData;
        if (!name || !email || !phone) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        if (!validatePhone(phone)) {
            alert('Veuillez entrer un numéro de téléphone valide.');
            return;
        }
        try {
            const dataToSend = {
                name,
                email,
                phone,
                items: Object.values(cartItems),
                total: formData.total
            };
            const response = await axios.post(`${apiUrl}/api/customerorder/createcustomerorder`, dataToSend, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 201) {
                alert('Commande passée avec succès !');
                setOrder(false);
                clearCart();
                goToHome();
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Une erreur est survenue lors de la soumission de la commande.');
        }
    };

  return (
    <div className="order-popup-container">
        <div className="order-popup">
            <div className="order-popup-header">
                <h2>Passer une commande</h2>
                <span onClick={handleClose}>x</span>
            </div>
            <form onSubmit={handleSubmit} >
                <input type="text" id="name" name="name" value={formData.name} required placeholder='Entrez votre nom'onChange={handleChange}/>
                <input type="email" id="email" name="email" value={formData.email} required placeholder='Entrez votre email'onChange={handleChange}/>
                <input type="text" id="phone" name="phone" value={formData.phone} required placeholder='Entrez votre téléphone'onChange={handleChange}/>
                <button type="submit">Commander</button>
            </form>
        </div>
    </div>
  )
}

export default OrderPopup
