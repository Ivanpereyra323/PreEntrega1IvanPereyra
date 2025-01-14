import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const mockItems = [
                { id: '1', name: 'Producto 1', description: 'Descripción del producto 1' },
                { id: '2', name: 'Producto 2', description: 'Descripción del producto 2' },
                { id: '3', name: 'Producto 3', description: 'Descripción del producto 3' },
            ];
            const foundItem = mockItems.find(item => item.id === id);
            setItem(foundItem);
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetailContainer;
