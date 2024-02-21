

export interface FormState {
  firstMenu: {
    firstDish: string;
    secondDish: string;
    sideDish: string;
    salad: string;
    bread: string;
    isChecked: boolean;
    count: number
  };
  secondMenu: {
    mainDish: string;
    dessert: string;
    isChecked: boolean;
    count: number
  };
  bigDessert: {
    meal: string;
    isChecked: boolean;
    count: number
  };
}