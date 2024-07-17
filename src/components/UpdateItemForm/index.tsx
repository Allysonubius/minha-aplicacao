// UpdateItemForm.tsx

import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import { UpdateItemFormProps, Item } from './types';
import { useNavigate } from 'react-router-dom';

const UpdateItemForm: React.FC<UpdateItemFormProps> = ({ item, onSubmit, onDelete, error }) => {
    const [nome, setNome] = useState(item.nome);
    const [perfisSelecionados, setPerfisSelecionados] = useState<string[]>(item.perfisSelecionados || []);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Inicializa os perfis selecionados baseado no item recebido
    useEffect(() => {
        const initialSelectedPerfis = item.perfisSelecionados || [];
        setPerfisSelecionados(initialSelectedPerfis);
    }, [item]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updatedItem: Item = {
            ...item,
            nome: nome,
            perfisSelecionados: perfisSelecionados
        };

        onSubmit(updatedItem);
        navigate('/');
    };

    const handleDelete = () => {
        onDelete();
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

    const perfisDisponiveis = ['Perfil 1', 'Perfil 2', 'Perfil 3']; // Exemplo de perfis disponíveis

    return (
        <form onSubmit={handleSubmit} className="update-item-form">
            <div className="form-group">
                <label>ID:</label>
                <input type="text" value={item.id} disabled />
            </div>
            <div className="form-group">
                <label>Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                {error && <div className="error">{error}</div>}
            </div>
            <div className="form-group">
                <label>Perfis:</label>
                <div className="dropdown" ref={dropdownRef}>
                    <div className="dropdown-toggle" onClick={toggleDropdown}>
                        {perfisSelecionados.length === 0 ? 'Selecione os Perfis' : `${perfisSelecionados.length} perfil(s) selecionado(s)`}
                    </div>
                    <div className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}>
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
                </div>
            </div>
            <div className="form-group">
                <button type="submit">Atualizar</button>
                <button type="button" onClick={handleDelete} className="delete-button">Deletar</button>
            </div>
        </form>
    );
};

export default UpdateItemForm;
