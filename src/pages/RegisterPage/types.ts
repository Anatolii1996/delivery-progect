/* eslint-disable */
export interface FormValues {
    name: string,
    email: string,
    password: string,
    tel: string,
  }
  
  export interface ErrorValues {
    name: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
    email: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
    password: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
    tel: {
      type: string;
      message: string;
      maxLength: {
        value: number;
        message: string;
      };
    };
  }