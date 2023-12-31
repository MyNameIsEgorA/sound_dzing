import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

render();

export default render;
