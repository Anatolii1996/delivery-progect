import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { FormState, ErrorValues } from "./types";
import cn from "classnames";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";

import MenuItem from "../../components/MenuItem/MenuItem";
import "./orderPage.scss";
import OrderItem from "../../components/OrderItem/OrderItem";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  useEffect(() => {
    dispatch(getPossibleOrder());
  }, []);

  const [formState, setFormState] = useState<FormState>({
    firstMenu: {
      dishes: {
        firstDish: "",
        secondDish: "",
        sideDish: "",
        salad: "",
        bread: "",
      },

      isChecked: false,
      count: 0,
    },
    secondMenu: {
      dishes: {
        mainDish: "",
        dessert: "",
      },

      isChecked: false,
      count: 0,
    },
    bigDessert: {
      dishes: {
        meal: "",
      },

      isChecked: false,
      count: 0,
    },
    address: "",
    tel: "",
    comment: "",
    price: 0,
  });


  const infoClasses = {
    address: cn({
      info: formState.address,
    }),
    tel: cn({
      info: formState.tel,
    }),
    comment: cn({
      info: formState.comment,
    }),
  };

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
          isChecked: prev.firstMenu.isChecked,
          count: prev.firstMenu.count,
        },
        secondMenu: {
          dishes: {
            mainDish: dalyMenu.menu2.mainDish.meal,
            dessert: dalyMenu.menu2.dessert.meal,
          },

          isChecked: prev.secondMenu.isChecked,
          count: prev.secondMenu.count,
        },
        bigDessert: {
          dishes: {
            meal: dalyMenu.bigDessert.nameDessert.meal,
          },

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

  const calculatePrice = () => {
    const firstMenuPrice = 115 * formState.firstMenu.count;
    const secondMenuPrice = 149 * formState.secondMenu.count;
    const bigDessertPrice = 39 * formState.bigDessert.count;
  
    const totalPrice = firstMenuPrice + secondMenuPrice + bigDessertPrice;
  
    setFormState((prevFormState) => ({
      ...prevFormState,
      price: totalPrice,
    }));
  };

  useEffect(() => {
    calculatePrice()
  }, [formState.firstMenu.count, formState.secondMenu.count, formState.bigDessert.count]);

 

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

    if (!values.tel) {
      errors.tel = {
        type: "required",
        message: "* Це поле обов'язкове",
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

    if (values.comment.length > 200) {
      errors.comment = {
        message: "* Максимальна довжина 200 символів",
      };
    }

    return {
      values: values,
      errors: errors,
    };
  };

  const onSubmit: SubmitHandler<FormState> = () => {
    // Здесь вы можете выполнить действия с данными формы
    console.log(formState);
  };

  const handleFormChange = <T extends HTMLInputElement>(
    e: React.ChangeEvent<T>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({ resolver });

  return (
    <div className="order_wrap">
      {dalyMenu && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
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

              <div className="user_box">
                <input
                  type="text"
                  autoComplete="off"
                  className="input"
                  {...register("address")}
                  value={formState.address}
                  onChange={handleFormChange}
                />
                <label className={infoClasses.address}>*Адреса доставки</label>
                <p>{errors.address?.message}</p>
              </div>

              <div className="user_box">
                <input
                  type="text"
                  autoComplete="off"
                  className="input"
                  {...register("tel")}
                  value={formState.tel}
                  onChange={handleFormChange}
                />
                <label className={infoClasses.tel}>*Номер телефону</label>
                <p>{errors.tel?.message}</p>
              </div>
              <div className="user_box">
                <input
                  type="text"
                  autoComplete="off"
                  className="input"
                  {...register("comment")}
                  value={formState.comment}
                  onChange={handleFormChange}
                />
                <label className={infoClasses.comment}>
                  Коментар до замовлення
                </label>
                <p>{errors.tel?.message}</p>
              </div>
              <button className="submit">Відправити</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default OrderPage;
