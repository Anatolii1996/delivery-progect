export interface OrderItemProps {
    key: string;
    menuItem: {
      meal: string;
      image: string;
      // Дополните остальные свойства объекта menuItem, если необходимо
    };
    index: number;
    label: string;
  }