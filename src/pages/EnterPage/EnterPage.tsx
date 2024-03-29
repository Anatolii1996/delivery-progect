/* eslint-disable */ 
import { FC, useState, useEffect } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { FormValues, ErrorValues } from "./types";
import { loginUser} from "../../redux/userSlice";

import { message } from "antd";
import cn from "classnames";
import "./enter.scss";

const EnterPage: FC = () => {
  const [ ,contextHolder] = message.useMessage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userEmail = useAppSelector((state) => state.userState.userInfo.email);
  // const userName = useAppSelector((state) => state.userState.userInfo.name);
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
    dispatch(loginUser(data));
    // console.log(data);
    setFormState({
      email: "",
      password: "",
    });
  };



  useEffect(() => {
    // console.log(import.meta.env.VITE_SERVER_URL)
    // console.log(import.meta.env.VITE_ADMIN_EMAIL)
    if (userEmail) {
      if (userEmail === import.meta.env.VITE_ADMIN_EMAIL) {
        navigate("/admin");
      } else {
        setTimeout(() => {
          navigate("/f/h/order");
        }, 1000);
      }
    }
  }, [userEmail]);

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

        <button className="submit">Увійти</button>

        <a href="#">Забули пароль?</a>
      </form>
    </div>
  );
};

export default EnterPage;
