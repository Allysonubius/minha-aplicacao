// src/pages/Home.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useItems } from '../ItemsContext';
import './styles.css'
import DataTable from '../../components/DataTable';
import { Item } from './types';


const Home: React.FC = () => {
  const { items, updateItem } = useItems();
  const navigate = useNavigate();
  const [editItem, setEditItem] = useState<Item | null>(null);

  const handleUpdate = (item: Item) => {
    navigate(`/editar/${item.id}`);
  };

  const handleCloseModal = () => {
    setEditItem(null);
  };

  const handleSave = (updatedItem: Item) => {
    updateItem(updatedItem);
    handleCloseModal();
  };

  return (
    <div className="container">
      <h1>Tabela de Dados</h1>
      <div className="button-container">
        <Link to="/adicionar">Adicionar Item</Link>
      </div>
      <div className="table-container">
        <DataTable data={items} onUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export default Home;
