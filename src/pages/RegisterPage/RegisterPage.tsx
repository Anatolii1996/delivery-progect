import { useState, FC } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { FormValues, ErrorValues } from "./types";
import "./register.scss";

const RegisterPage: FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    tel: "",
  });

  const resolver: Resolver<FormValues> = async (values) => {
    const errors: Partial<ErrorValues> = {};

    if (!values.name) {
      errors.name = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }

    if (values.name.length > 50) {
      errors.name = {
        message: "* Максимальна довжина 50 символів",
      };
    }

    if (!values.email) {
      errors.email = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }
    if (values.email.length > 30) {
      errors.email = {
        message: "* Максимальна довжина 30 символів",
      };
    }

    if (!values.password) {
      errors.password = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }

    if (values.password.length < 8) {
      errors.password = {
        message: "*Мінімальна довжина 8 символів",
      };
    }

    if (!values.tel) {
      errors.tel = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }

    if (values.tel.length < 10) {
      errors.tel = {
        message: "*Мінімальна довжина 10 символів",
      };
    }

    if (values.tel.length > 20) {
      errors.tel = {
        message: "*Максимальна довжина 20 символів",
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

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Здесь вы можете выполнить действия с данными формы

    setFormState({
      name: "",
      email: "",
      password: "",
      tel: "",
    });
  };

  const handleFormChange = <T extends HTMLInputElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="register_wrap">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Register </p>

        <div className="user_box">
          <input
            type="text"
            autoComplete="off"
            className="input"
            {...register("name")}
            value={formState.name}
            onChange={handleFormChange}
          />
          <label>*Ім'я</label>
          <p>{errors.name?.message}</p>
        </div>

        <div className="user_box">
          <input
            type="email"
            autoComplete="off"
            className="input"
            {...register("email")}
            value={formState.email}
            onChange={handleFormChange}
          />
          <label>*Email</label>
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
          <label>*Пароль</label>
          <p>{errors.password?.message}</p>
        </div>

        <div className="user_box">
          <input
            type="tel"
            autoComplete="off"
            placeholder=""
            className="input"
            {...register("tel")}
            value={formState.tel}
            onChange={handleFormChange}
          />
          <label>*Номер телефону </label>
          <p>{errors.tel?.message}</p>
        </div>

        <button className="submit">Submit</button>

        <a href="#">Забули пароль?</a>
      </form>
    </div>
  );
};

export default RegisterPage;
