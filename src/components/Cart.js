import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { CartIcon } from "./CartIcon";
import { SuccessNotification } from "./Notification/SuccessNotification";
import { InfoNotification } from "./Notification/InfoNotification";
import { ErrorNotification } from "./Notification/ErrorNotification";

export const Cart = () => {
  const [cart, setCart] = useState([]);
  
  const renderBadge = (count) => {
    
    return (
      <div className="badge-container">
        <div className="badge">
          {count}
        </div>
      </div>
    )
  }
  
  const handleAddItem = () => {
    setCart([...cart, {}])
  }
  
  const handleRemoveItem = () => {
    setCart(cart.slice(0, -1))
  }
  
  const handleClick = () => {
    
  }
  
  return (
    <div className="cart-container">
      <Button onClick={handleAddItem}>Add</Button>
      <Button onClick={handleRemoveItem}>Remove</Button>
      <CartIcon onClick={handleClick}
      renderBadge={() => renderBadge(cart.length)}
      />
      <SuccessNotification title={"Hello"} message={"Good"} />
      <InfoNotification title={"Info"} message={"Information"} />
      <ErrorNotification title={"Error"} message={"Message"} />
    </div>
  );
};
