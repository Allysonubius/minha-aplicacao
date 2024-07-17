export interface Item {
    id: number;
    nome: string;
    perfil: string; 
    selected: boolean;
  }
  
  // types.tsx
export interface AddItemFormProps {
  onSubmit: (data: { nome: string; selectedItems: Item[] }) => void;
  existingItems: Item[];
}

  