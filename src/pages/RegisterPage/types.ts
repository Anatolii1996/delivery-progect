/* eslint-disable */
export interface FormValues {
  name: string;
  email: string;
  password: string;
  tel: string;
  address: string;
}

export interface ErrorValues {
  name: {
    type?: string;
    message: string;
  };
  email: {
    type?: string;
    message: string;
  };
  password: {
    type?: string;
    message: string;
  };
  tel: {
    type?: string;
    message: string;
  };
  address: {
    type?: string;
    message: string;
  };
}
