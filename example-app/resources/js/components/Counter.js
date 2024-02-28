// resources/js/components/Counter.js

import axios from "axios";
import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { useRef } from 'react';

export default function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);
  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);

  };

  // Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

    // Notifies the server about the change
  const crearUsuario = () => {
      axios.post('api/users', {
          name: '11',
          email: document.getElementById('correo').value,
          email_verified_at: '122',
          password: document.getElementById('palabraSecreta').value,
          remember_token: '111',
          created_at: '1',
          updated_at:12
      }).then(function(response){
        console.log(response);
      })
  }

  return (
    <div>
        <button onClick={crearUsuario} class="btn btn-primary mb-2">
            Crear Usuario
        </button>
    </div>
  );
}

if (document.getElementById('counter')) {
    createRoot(document.getElementById('counter')).render(<Counter />,);
}
