// resources/js/components/Counter.js

import axios from "axios";
import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
        notifyServer();

  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    notifyServer();
  };

    // Notifies the server about the change
  const notifyServer = () => {
      axios.post('api/products', {
          created_at: '11',
          updated_at: '11',
          title: 'probando',
          description: 'prueba',
          price: '111',
          availability: '1',
      })
  }
  return (
    <div>
        <button onClick={handleDecrement}>-</button>
        <span> {count} </span>
        <button onClick={handleIncrement}>+</button>
    </div>
  );
}

if (document.getElementById('counter')) {
    createRoot(document.getElementById('counter')).render(<Counter />,);
}
