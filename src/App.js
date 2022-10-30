import React, { useEffect } from "react";
import './style.css'
import Navbar from "./componenets/navbar/Navbar";
import CartContainer from "./componenets/cartContainer/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calAmount_total,getCartItems } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(store => store.cart)
  useEffect(() => {
    dispatch(calAmount_total())
    // eslint-disable-next-line 
  }, [cartItems])

  useEffect(()=>{
    dispatch(getCartItems('random'))
    // eslint-disable-next-line 
  },[])
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
