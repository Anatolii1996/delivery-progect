export interface IUserStore {
  status: boolean | undefined;
  userInfo: {
    name: string;
    tel: string;
    address: string;
  };
}

export interface IUserState {
  name: string;
  password: string;
  email: string;
  tel: string;
  address: string;
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
    nameDessert: {
      meal: string;
      image: string;
    };
  };
  date: string;
  _id: string;
}

export interface IChangeMenu {
  bigDessert: string;
  firstDish: string;
  secondDish: string;
  sideDish: string;
  salad: string;

  mainDish: string;
  dessert: string;
}

export interface IOrder {
  tel: string;
  address: string;
  price: number;
  details: {
    Меню1?: {
      count: number;
      dishes: string[];
    };
    Меню2?: {
      count: number;
      dishes: string[];
    };
    Десерт?: {
      count: number;
      dishes: string[];
    };
  };
}

export interface IOrderState {
  _id: string;
  tel: string;
  address: string;
  price: number;
  date: string;
  details: {
    Меню1?: {
      count: number;
      dishes: string[];
    };
    Меню2?: {
      count: number;
      dishes: string[];
    };
    Десерт?: {
      count: number;
      dishes: string[];
    };
  };
}
