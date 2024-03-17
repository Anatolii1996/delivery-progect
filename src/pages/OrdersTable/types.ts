// export interface IOrderType {
//   N: number;
//   Імя: string;
//   Замовлення: string;
//   Адреса: string;
//   Тел: string;
//   Вартість: string;
// }

export interface IOrderType {
  number: number;
  key: string;
  body:any[];
  address: string;
  tel: string;
  price: number;
}
