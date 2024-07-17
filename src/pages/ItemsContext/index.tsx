// src/context/ItemsContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ItemsContextType, Item } from './types';

const ItemsContext = createContext<ItemsContextType>({
    items: [],
    addItem: (item: Item) => {}, 
    updateItem: (item: Item) => {},
    deleteItem: (id: number) => {} ,
});

export const ItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const updateItem = (updatedItem: Item) => {
    setItems((prevItems) =>
      prevItems.map(item => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.filter(item => item.id !== id)
    );
  };

  return (
    <ItemsContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
};
