import React from "react";
import { FormState } from "../../pages/OrderPage/types";
import { FieldValues, UseFormRegister   } from 'react-hook-form';

export interface UserBoxProps{
    label: "address"|"tel"|"comment";
    formState: FormState;
    setFormState: React.Dispatch<React.SetStateAction<FormState>>;
    note: string;
    handleFormChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
    register:UseFormRegister<FormState>;
    errors: Record<string, FieldValues['message']>;
}; 

export interface FormData {
    firstMenu: {
      dishes: {
        firstDish: string;
        secondDish: string;
        sideDish: string;
        salad: string;
        bread: string;
      };
      label: string;
      isChecked: boolean;
      count: number;
    };
    secondMenu: {
      dishes: {
        mainDish: string;
        dessert: string;
      };
      label: string;
      isChecked: boolean;
      count: number;
    };
    bigDessert: {
      dishes: {
        meal: string;
      };
      label: string;
      isChecked: boolean;
      count: number;
    };
    address: string;
    tel: string;
    comment: string;
    price: number;
  }
  
  
  