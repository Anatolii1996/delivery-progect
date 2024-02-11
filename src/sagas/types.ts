export interface IUserAction {
  type: string;
  payload: IUserState;
}

export interface IUserState {
  name: string;
  email: string;
  password: string;
  tel: string;
  address: string;
}

export interface IDalyAction {
  type: string;
  payload: IDalyForm;
}

export interface IDalyForm {
  bigDessert: string;
  dessert: string;
  firstDish: string;
  mainDish: string;
  salad: string;
  secondDish: string;
  sideDish: string;
}