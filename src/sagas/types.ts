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
