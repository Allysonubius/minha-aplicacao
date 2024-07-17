// src/components/EditItemModal.tsx
import React, { useState } from 'react';
import './styles.css';

interface Item {
  id: number;
  nome: string;
}

interface EditItemModalProps {
  item: Item;
  onClose: () => void;
  onSave: (item: Item) => void;
}

const EditItemModal: React.FC<EditItemModalProps> = ({ item, onClose, onSave }) => {
  const [nome, setNome] = useState(item.nome);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave({ ...item, nome });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Item</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>ID:</label>
            <input type="text" value={item.id} disabled />
          </div>
          <div>
            <label>Nome:</label>
            <input 
              type="text" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
            />
          </div>
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
