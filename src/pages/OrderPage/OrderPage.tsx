import { FC, useEffect, useState } from "react";

import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { FormState, ErrorValues } from "./types";

import { message } from "antd";
import moment from "moment";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";
import { setOrder, resetState } from "../../redux/orderSlice";

import MenuItem from "../../components/MenuItem/MenuItem";
import OrderItem from "../../components/OrderItem/OrderItem";
import UserBox from "../../components/UserBox/UserBox";

import "./orderPage.scss";

const OrderPage: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(
    moment().format("HH:mm")
  );
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);
  const isSuccess = useAppSelector((state) => state.order.success);

  const [isCash, setIsCash] = useState(true);
  const [isCard, setIsCard] = useState(false);

  const [formState, setFormState] = useState<FormState>({
    firstMenu: {
      dishes: {
        firstDish: "",
        secondDish: "",
        sideDish: "",
        salad: "",
        bread: "",
      },
      label: "Меню1",
      isChecked: false,
      count: 0,
    },
    secondMenu: {
      dishes: {
        mainDish: "",
        dessert: "",
      },
      label: "Меню2",
      isChecked: false,
      count: 0,
    },
    bigDessert: {
      dishes: {
        meal: "",
      },
      label: "Десерт",
      isChecked: false,
      count: 0,
    },
    address: "",
    tel: "",
    comment: "",
    price: 0,
  });

  useEffect(() => {
    dispatch(getPossibleOrder());
    const interval = setInterval(() => {
      setCurrentTime(moment().format("HH:mm"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setFormState((prev) => {
      return {
        firstMenu: {
          dishes: {
            firstDish: dalyMenu.menu1.firstDish.meal,
            secondDish: dalyMenu.menu1.secondDish.meal,
            sideDish: dalyMenu.menu1.sideDish.meal,
            salad: dalyMenu.menu1.salad.meal,
            bread: dalyMenu.menu1.bread.meal,
          },
          label: prev.firstMenu.label,
          isChecked: prev.firstMenu.isChecked,
          count: prev.firstMenu.count,
        },
        secondMenu: {
          dishes: {
            mainDish: dalyMenu.menu2.mainDish.meal,
            dessert: dalyMenu.menu2.dessert.meal,
          },
          label: prev.secondMenu.label,
          isChecked: prev.secondMenu.isChecked,
          count: prev.secondMenu.count,
        },
        bigDessert: {
          dishes: {
            meal: dalyMenu.bigDessert.nameDessert.meal,
          },
          label: prev.bigDessert.label,
          isChecked: prev.bigDessert.isChecked,
          count: prev.bigDessert.count,
        },
        address: prev.address,
        tel: prev.tel,
        comment: prev.comment,
        price: prev.price,
      };
    });
  }, [dalyMenu]);

  useEffect(() => {
    if (isSuccess) {
      setFormState({
        firstMenu: {
          dishes: {
            firstDish: "",
            secondDish: "",
            sideDish: "",
            salad: "",
            bread: "",
          },
          label: "Меню1",
          isChecked: false,
          count: 0,
        },
        secondMenu: {
          dishes: {
            mainDish: "",
            dessert: "",
          },
          label: "Меню2",
          isChecked: false,
          count: 0,
        },
        bigDessert: {
          dishes: {
            meal: "",
          },
          label: "Десерт",
          isChecked: false,
          count: 0,
        },
        address: "",
        tel: "",
        comment: "",
        price: 0,
      });
      dispatch(resetState());
      success();
    }
  }, [isSuccess]);

  useEffect(() => {
    calculatePrice();
  }, [
    formState.firstMenu.count,
    formState.secondMenu.count,
    formState.bigDessert.count,
    formState.firstMenu.dishes.firstDish,
    formState.firstMenu.dishes.salad,
  ]);

  const onSubmit: SubmitHandler<FormState> = () => {
    // Здесь вы можете выполнить действия с данными формы
    const items = Object.values(formState).filter((item) => item.count > 0);

    // console.log(items);
    const orderObject = {
      tel: formState.tel,
      address: formState.address,
      price: formState.price,
      details: {} as {
        [key: string]: {
          dishes: string[];
          count: number;
        };
      },
    };

    items.forEach((item) => {
      // console.log(item);
      const dishesArray = Object.values(item.dishes) as string[];
      const filteredDishes = dishesArray.filter(
        (dish: string) => dish.trim() !== ""
      );

      orderObject.details[item.label] = {
        dishes: filteredDishes,
        count: item.count,
      };
    });

    // console.log(orderObject);
    dispatch(setOrder(orderObject));
    // console.log(formState);
  };

  const handleFormChange = <T extends HTMLInputElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resolver: Resolver<FormState> = async (values) => {
    const errors: Partial<ErrorValues> = {};

    if (!values.address) {
      errors.address = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }
    if (values.address.length > 100) {
      errors.address = {
        message: "* Максимальна довжина 100 символів",
      };
    }

    if (values.tel.length > 20) {
      errors.tel = {
        message: "* Максимальна довжина 20 символів",
      };
    }
    if (values.tel.length < 10) {
      errors.tel = {
        message: "* Мінімальна довжина 10 символів",
      };
    }

    if (!values.tel) {
      errors.tel = {
        type: "required",
        message: "* Це поле обов'язкове",
      };
    }

    if (values.comment.length > 200) {
      errors.comment = {
        message: "* Максимальна довжина 200 символів",
      };
    }

    if (
      !formState.firstMenu.dishes.firstDish &&
      !formState.firstMenu.dishes.salad
    ) {
      errors.comment = {
        message: "Ви не можете виключити дві страви",
      };
    }

    if (currentTime > "10:30") {
      errors.comment = {
        message: "Замовлення приймаються до 10:30. Чекаємо на Вас завтра!",
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
  } = useForm<FormState>({ resolver });

  const calculatePrice = () => {
    let firstMenuPrice = 115 * formState.firstMenu.count;

    if (
      !formState.firstMenu.dishes.firstDish ||
      !formState.firstMenu.dishes.salad
    ) {
      firstMenuPrice = 95 * formState.firstMenu.count;
    }

    const secondMenuPrice = 149 * formState.secondMenu.count;
    const bigDessertPrice = 39 * formState.bigDessert.count;

    const totalPrice = firstMenuPrice + secondMenuPrice + bigDessertPrice;

    setFormState((prevFormState) => ({
      ...prevFormState,
      price: totalPrice,
    }));
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Замовлення успішно відправлено",
    });
  };

  return (
    <div className="order_wrap">
      {dalyMenu && (
        <>
          {contextHolder}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="order_windows">
              <MenuItem
                object={dalyMenu.menu1}
                formState={formState}
                setFormState={setFormState}
                menuLabel={"Меню 1"}
              />
              <div className="twoMenus">
                <MenuItem
                  object={dalyMenu.menu2}
                  formState={formState}
                  setFormState={setFormState}
                  menuLabel={"Меню 2"}
                />
                <MenuItem
                  object={dalyMenu.bigDessert}
                  formState={formState}
                  setFormState={setFormState}
                  menuLabel={"Десерт"}
                />
                <div className="wrapper">
                  <h2>Оплата:</h2>
                  <div className="option">
                    <input
                      className="input"
                      type="radio"
                      value="Готівкою"
                      checked={isCash}
                      disabled={isCash}
                      onChange={() => {
                        setIsCard(!isCard);
                        setIsCash(!isCash);
                      }}
                    />
                    <div className="btn">
                      <span className="span">Готівкою</span>
                    </div>
                  </div>
                  <div className="option">
                    <input
                      className="input"
                      type="radio"
                      value="Картою"
                      checked={isCard}
                      disabled={isCard}
                      onChange={() => {
                        setIsCard(!isCard);
                        setIsCash(!isCash);
                      }}
                    />
                    <div className="btn">
                      <span className="span">Картою</span>
                    </div>{" "}
                  </div>
                </div>
                {isCard && (
                  <div className="cardNumber">
                    <h3>Номер карти</h3>
                    <p>0000 0000 0000 0000</p>
                  </div>
                )}
              </div>
            </div>

            <div className="form_order">
              <h2>Ваше замовлення:</h2>
              <OrderItem object={formState.firstMenu} label="Меню 1" />
              <OrderItem object={formState.secondMenu} label="Меню 2" />
              <OrderItem object={formState.bigDessert} label="Десерт" />

              <div className="order_price">
                <h3>Вартість:</h3>
                <p>{formState.price} грн</p>
              </div>
              <UserBox
                label={"address"}
                formState={formState}
                setFormState={setFormState}
                note={"*Адреса доставки"}
                handleFormChange={handleFormChange}
                register={register}
                errors={errors}
              />

              <UserBox
                label={"tel"}
                formState={formState}
                setFormState={setFormState}
                note={"*Номер телефону"}
                handleFormChange={handleFormChange}
                register={register}
                errors={errors}
              />

              <UserBox
                label={"comment"}
                formState={formState}
                setFormState={setFormState}
                note={"Коментар до замовлення"}
                handleFormChange={handleFormChange}
                register={register}
                errors={errors}
              />

              <button className="submit">Відправити</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default OrderPage;
