

export interface FormState {
  firstMenu: {
    dishes:{
       firstDish: string;
    secondDish: string;
    sideDish: string;
    salad: string;
    bread: string;
    }
   
    isChecked: boolean;
    count: number
  };
  secondMenu: {
    dishes:{
       mainDish: string;
    dessert: string;
    }
   
    isChecked: boolean;
    count: number
  };
  bigDessert: {
    dishes:{
       meal: string; 
    }
   
    isChecked: boolean;
    count: number
  };
  address:string;
  tel:string;
  comment:string;
  price:number;
}

export interface ErrorValues{
  address: {
    type?: string;
    message: string;
  };
  tel: {
    type?: string;
    message: string;
  };
  comment: {
    type?: string;
    message: string;
  };
}