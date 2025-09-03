import { createContext, useContext } from "react";
import { useState, useEffect } from "react";


export const StoreContext = createContext();

export function StoreProvider({ children }) {

    const [cartItems, setCartItems] = useState({});
    const [order, setOrder] = useState(false);
    const [description, setDescription] = useState(false);


    const addToCart = (item) => {
        console.log("Adding to cart:", item);
        const key = item.id || item.name; // Utilise l'ID si disponible, sinon le nom
        setCartItems((prev) => {
        const prevItem = prev[key];
        if (prevItem) {
        // Incrémente la quantité
        return {
          ...prev,
          [key]: {
            ...prevItem,
            quantity: prevItem.quantity + 1,
          },
        };
        } else {
            // Ajoute l'objet complet avec quantité 1
            return {
            ...prev,
            [key]: {
                ...item,
                quantity: 1,
            },
            };
        }
        });
  };

  const removeFromCart = (item) => {
    const key = item.id || item.name; // Utilise l'ID si disponible, sinon le nom
    setCartItems((prev) => {
      const prevItem = prev[key];
      if (prevItem && prevItem.quantity > 1) {
        return {
          ...prev,
          [key]: {
            ...prevItem,
            quantity: prevItem.quantity - 1,
          },
        };
      } else {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
    });
  };

    const clearCart = () => {
        setCartItems({});
    }

    useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);


  return (
    <StoreContext.Provider value={{ addToCart, removeFromCart, clearCart, cartItems,
        order, setOrder, description, setDescription
     }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
