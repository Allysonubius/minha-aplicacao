// UpdateItemPage.tsx

import React, { useState } from 'react';
import './styles.css';
import UpdateItemForm from '../../components/UpdateItemForm';
import DeleteConfirmationModal from '../../components/DeleteConfirmationModal';
import { useItems } from '../ItemsContext';
import { useParams } from 'react-router-dom';
import { Item } from './types';

const UpdateItemPage: React.FC = () => {
    const { items, updateItem, deleteItem } = useItems();
    const [error, setError] = useState<string | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();
    const item = items.find(i => i.id === Number(id)); 

    if (!item) {
        return <div>Item não encontrado</div>;
    }

    const handleSubmit = (updatedItem: Item) => {
        if (items.some(i => i.nome.toLowerCase() === updatedItem.nome.toLowerCase() && i.id !== updatedItem.id)) {
            setError('O nome já existe.');
            return;
        }

        updateItem(updatedItem);
    };

    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        deleteItem(item.id);
        setShowDeleteModal(false);
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
    };

    return (
        <div className="update-container">
            <h1>Atualizar Item</h1>
            {error && <div className="error">{error}</div>}
            <UpdateItemForm item={item} onSubmit={handleSubmit} onDelete={handleDelete} error={error} />
            <DeleteConfirmationModal
                isOpen={showDeleteModal}
                onCancel={cancelDelete}
                onConfirm={confirmDelete}
            />
        </div>
    );
};

export default UpdateItemPage;
