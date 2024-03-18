import { FC, useState } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { FormValues, ErrorValues } from "./types";

import { message } from "antd";
import cn from "classnames";
import "./enter.scss";

const EnterPage: FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const resolver: Resolver<FormValues> = async (values) => {
    const errors: Partial<ErrorValues> = {};

    if (!values.email) {
      errors.email = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }
    if (values.email.length > 50) {
      errors.email = {
        message: "* Максимальна довжина 50 символів",
      };
    }

    if (!values.password) {
      errors.password = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }

    if (values.password.length < 8 && values.password.length > 0) {
      errors.password = {
        message: "*Мінімальна довжина 8 символів",
      };
    }

    return {
      values: values,
      errors: errors,
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const infoClasses = {
    email: cn({
      info: formState.email,
    }),
    password: cn({
      info: formState.password,
    }),
  };

  const handleFormChange = <T extends HTMLInputElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Здесь вы можете выполнить действия с данными формы
    // dispatch(createUser(data));
console.log(data)
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="enter_wrap">
      {contextHolder}
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Вхід</p>

        <div className="user_box">
          <input
            type="email"
            autoComplete="off"
            className="input"
            {...register("email")}
            value={formState.email}
            onChange={handleFormChange}
          />
          <label className={infoClasses.email}>*Email</label>
          <p>{errors.email?.message}</p>
        </div>

        <div className="user_box">
          <input
            autoComplete="off"
            type="password"
            className="input"
            {...register("password")}
            value={formState.password}
            onChange={handleFormChange}
          />
          <label className={infoClasses.password}>*Пароль</label>
          <p>{errors.password?.message}</p>
        </div>

        <button className="submit">Зареєструватись</button>

        <a href="#">Забули пароль?</a>
      </form>
    </div>
  );
};

export default EnterPage;
