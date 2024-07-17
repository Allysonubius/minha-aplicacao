// src/components/DataTable.tsx
import React from 'react';
import { DataTableProps } from './types';
import { FaEdit } from 'react-icons/fa';

const DataTable: React.FC<DataTableProps> = ({ 
    data, 
    onUpdate 
}) => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Perfil</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.perfil}</td>
              <td>
                <button onClick={() => onUpdate(item)}>
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default DataTable;