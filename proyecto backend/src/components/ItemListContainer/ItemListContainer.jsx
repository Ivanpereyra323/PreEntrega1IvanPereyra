import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css'; 

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = [
        { id: 1, name: 'Producto 1', imageUrl: 'https://via.placeholder.com/200' },
        { id: 2, name: 'Producto 2', imageUrl: 'https://via.placeholder.com/200' },
        { id: 3, name: 'Producto 3', imageUrl: 'https://via.placeholder.com/200' },
      ];
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {items.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-list"> {}
          {items.map((item) => (
            <div key={item.id} className="product-item"> {}
              <Link to={`/item/${item.id}`}>
                <img src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
