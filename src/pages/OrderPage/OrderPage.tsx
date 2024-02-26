import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler, Resolver } from "react-hook-form";
import { FormState } from "./types";
import cn from "classnames";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";

import MenuItem from "../../components/MenuItem/MenuItem";
import "./orderPage.scss";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  useEffect(() => {
    dispatch(getPossibleOrder());
  }, []);

  const [formState, setFormState] = useState<FormState>({
    firstMenu: {
      firstDish: "",
      secondDish: "",
      sideDish: "",
      salad: "",
      bread: "",
      isChecked: false,
      count: 0,
    },
    secondMenu: {
      mainDish: "",
      dessert: "",
      isChecked: false,
      count: 0,
    },
    bigDessert: {
      meal: "",
      isChecked: false,
      count: 0,
    },
    address:"",
    tel:""
  });

  const infoClasses = {
    address: cn({
      info: formState.address,
    }),
    tel: cn({
      info: formState.tel,
    }),
    
  };

  useEffect(() => {
    setFormState((prev) => {
      return {
        firstMenu: {
          firstDish: dalyMenu.menu1.firstDish.meal,
          secondDish: dalyMenu.menu1.secondDish.meal,
          sideDish: dalyMenu.menu1.sideDish.meal,
          salad: dalyMenu.menu1.salad.meal,
          bread: dalyMenu.menu1.bread.meal,
          isChecked: prev.firstMenu.isChecked,
          count: prev.firstMenu.count,
        },
        secondMenu: {
          mainDish: dalyMenu.menu2.mainDish.meal,
          dessert: dalyMenu.menu2.dessert.meal,
          isChecked: prev.secondMenu.isChecked,
          count: prev.secondMenu.count,
        },
        bigDessert: {
          meal: dalyMenu.bigDessert.nameDessert.meal,

          isChecked: prev.bigDessert.isChecked,
          count: prev.bigDessert.count,
        },
        address:prev.address,
        tel:prev.tel,
      };
    });
  }, [dalyMenu]);

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
  } = useForm<FormState>({  });

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
                <div className="user_box">
                  <input
                    type="text"
                    autoComplete="off"
                    className="input"
                    {...register("address")}
                    value={formState.address}
                    onChange={handleFormChange}
                  />
                  <label
                  className={infoClasses.address}
                  >
                    *Адреса доставки
                  </label>
                  {/* <p>{errors.name?.message}</p> */}
                </div>

                <div className="user_box">
                  <input
                    type="email"
                    autoComplete="off"
                    className="input"
                    {...register("tel")}
                    value={formState.tel}
                    onChange={handleFormChange}
                  />
                  <label
                  className={infoClasses.tel}
                  >
                    *Номер телефону
                  </label>
                  {/* <p>{errors.email?.message}</p> */}
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
