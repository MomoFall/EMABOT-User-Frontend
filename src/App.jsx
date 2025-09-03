import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';
import { useStore } from './components/StoreContext/StoreContext';
import OrderPopup from './components/OrderPopup/OrderPopup';

function App() {
  const { order } = useStore();

  return (
    <>
    {order === true ? <OrderPopup /> : null}
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      
    </div>
    </>
  )
}

export default App
