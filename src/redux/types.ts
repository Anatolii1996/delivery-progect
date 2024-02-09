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
      firstDish: string;
      secondDish: string;
      sideDish: string;
      salad: string;
      bread: string;
    },
    menu2: {
      mainDish: string;
      dessert: string;
    },
    dessert: string,
    date: string,
    _id: string,
  
}
