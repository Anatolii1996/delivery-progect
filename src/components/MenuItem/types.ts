import { FormState } from "../../pages/OrderPage/types";

export interface MenuItemProps {
  object:Record<string, any>;
  setFormState: React.Dispatch<React.SetStateAction<FormState>>;
  formState: FormState;
  menuLabel: string; 
}
