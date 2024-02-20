export interface IUserMessage {
  message: string;
}
export interface IMenu {
  dishes: {
    firstDishes: string[];
    secondDishes: string[];
    sideDishes: string[];
    salads: string[];
    desserts: string[];
  };
}

export interface IDalyMenu {
  menu1: {
    firstDish: {
      meal: string;
      image: string;
    };
    secondDish: {
      meal: string;
      image: string;
    };
    sideDish: {
      meal: string;
      image: string;
    };
    salad: {
      meal: string;
      image: string;
    };
    bread: {
      meal: string;
      image: string;
    };
  };
  menu2: {
    mainDish: {
      meal: string;
      image: string;
    };
    dessert: {
      meal: string;
      image: string;
    };
  };
  bigDessert: {
    meal: string;
    image: string;
  };
  date: string;
  _id: string;
}
