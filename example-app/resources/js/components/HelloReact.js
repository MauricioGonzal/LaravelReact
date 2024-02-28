import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function HelloReact() {
    return (
        <><form>
                        <div class="form-group">
                            <label for="correo">Correo</label>
                            <input id="correo" name="correo"
                                class="form-control" type="email"
                                placeholder="Correo electrónico"></input>
                        </div>
                        <div class="form-group">
                            <label for="palabraSecreta">Contraseña</label>
                            <input id="palabraSecreta" name="palabraSecreta"
                                class="form-control" type="password"
                                placeholder="Contraseña"></input>
                        </div>
        </form>
        </>
    );
}

if (document.getElementById('hello-react')) {
    createRoot(document.getElementById('hello-react')).render(<HelloReact />,);
}