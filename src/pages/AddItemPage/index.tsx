// AddItemPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddItemForm from '../../components/AddItemForm';
import { useItems } from '../ItemsContext';

const AddItemPage: React.FC = () => {
  const { items, addItem } = useItems();
  const navigate = useNavigate();

  const handleSubmit = (data: { nome: string }) => {
    const newItem = {
      id: Date.now(),
      nome: data.nome,
      perfil: 'Padrão',
      perfisSelecionados: []
    }; 
    addItem(newItem);
    navigate('/');
  };

  const itemsWithSelected = items.map(item => ({ ...item, selected: false }));

  return (
    <div>
      <h1>Adicionar Item</h1>
      <AddItemForm onSubmit={handleSubmit} existingItems={itemsWithSelected} />
    </div>
  );
};

export default AddItemPage;
