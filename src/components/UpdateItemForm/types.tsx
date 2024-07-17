
export interface Item {
    id: number;
    nome: string;
    perfil: string;
    perfisSelecionados: string[];
}

export interface UpdateItemFormProps {
    item: Item;
    onSubmit: (item: Item) => void;
    onDelete: () => void; 
    error: string | null; 
}