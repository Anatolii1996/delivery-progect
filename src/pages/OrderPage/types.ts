export interface FormValues {
  firstMenu: {
    firstDish:string;
    secondDish: string;
    sideDish: string;
    salad: string;
    bread: boolean;
  };
  secondMenu: {
    mainDish: string;
    dessert: string;
  };
  bigDessert:string;
}

export interface FormState {
  firstMenu: {
    firstDish: string;
    secondDish: string;
    sideDish: string;
    salad: string;
    bread: string;
    isChecked: boolean;
  };
  secondMenu: {
    mainDish: string;
    dessert: string;
    isChecked: boolean;
  };
  bigDessert: {
    meal: string;
    isChecked: boolean;
  };
}