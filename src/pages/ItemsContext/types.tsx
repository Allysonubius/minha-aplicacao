export interface Item {
    [x: string]: any;
    id: number;
    nome: string;
    perfil: string;
    perfisSelecionados: string[];
}

export interface ItemsContextType {
    items: Item[];
    addItem: (item: Item) => void;
    updateItem: (item: Item) => void;
    deleteItem: (id: number) => void; 
}