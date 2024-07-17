import React, { useState } from 'react';
import { AddItemFormProps, Item } from './types';
import './styles.css';

const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit, existingItems }) => {
  const [nome, setNome] = useState<string>('');
  const [perfisSelecionados, setPerfisSelecionados] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // Estado para controlar se o dropdown está aberto

  const perfisDisponiveis = ['Perfil 1', 'Perfil 2', 'Perfil 3'];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (nome.trim() === '') {
      setError('O nome não pode estar vazio.');
      return;
    }

    if (nome.length > 60) {
      setError('O nome não pode ter mais que 60 caracteres.');
      return;
    }

    if (existingItems.some(item => item.nome.toLowerCase() === nome.toLowerCase())) {
      setError('O nome já existe.');
      return;
    }

    if (perfisSelecionados.length === 0) {
      setError('Selecione pelo menos um perfil.');
      return;
    }

    const selectedItems: Item[] = perfisSelecionados.map(perfil => ({
      id: Date.now(), // ou algum outro id único para cada perfil selecionado
      nome: nome,
      perfil: perfil,
      selected: true
    }));

    onSubmit({ nome, selectedItems });
    setNome('');
    setPerfisSelecionados([]);
    setError(null);
  };

  const handleCheckboxChange = (perfil: string) => {
    const alreadySelected = perfisSelecionados.includes(perfil);
    if (alreadySelected) {
      setPerfisSelecionados(perfisSelecionados.filter(item => item !== perfil));
    } else {
      setPerfisSelecionados([...perfisSelecionados, perfil]);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Perfis:</label>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={toggleDropdown}>
            Selecione os Perfis
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {perfisDisponiveis.map(perfil => (
                <div key={perfil}>
                  <input
                    type="checkbox"
                    checked={perfisSelecionados.includes(perfil)}
                    onChange={() => handleCheckboxChange(perfil)}
                  />
                  <label>{perfil}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default AddItemForm;
