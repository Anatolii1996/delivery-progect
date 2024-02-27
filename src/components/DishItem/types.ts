import { FormState } from "../../pages/OrderPage/types";
export interface DishItemProps {
    key: string;
    menuItem: {
      meal: string;
      image: string;
      // Дополните остальные свойства объекта menuItem, если необходимо
    };
    index: number;
    label: string;
    setFormState:React.Dispatch<React.SetStateAction<FormState>>;
  }