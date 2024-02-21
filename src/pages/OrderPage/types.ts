export interface FormValues {
  firstMenu: {
    firstDish: {
      meal: string;
      checked: boolean;
    };
    secondDish: {
      meal: string;
      checked: boolean;
    };
    sideDish: {
      meal: string;
      checked: boolean;
    };
    salad: {
      meal: string;
      checked: boolean;
    };
    bread: boolean;
  };
  secondMenu: {
    mainDish: {
      meal: string;
      checked: boolean;
    };
    dessert: {
      meal: string;
      checked: boolean;
    };
  };
  bigDessert: {
    meal: string;
    checked: boolean;
  };
}
