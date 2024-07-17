export interface Item {
  id: number;
  nome: string;
  perfil: string;
  perfisSelecionados: string[];
}

export interface DataTableProps {
  data: Item[];
  onUpdate: (item: Item) => void;
}