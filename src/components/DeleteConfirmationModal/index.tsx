import React from 'react';
import './styles.css';
import { DeleteConfirmationModalProps } from './types';

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ 
    isOpen, 
    onCancel, 
    onConfirm 
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>Tem certeza que deseja deletar este item?</p>
                <div className="modal-buttons">
                    <button onClick={onConfirm}>Deletar</button>
                    <button onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
