import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormState } from "./types";

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
      nameDessert: {
        meal: "",
      },

      isChecked: false,
      count: 0,
    },
  });

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
          nameDessert: {
            meal: dalyMenu.bigDessert.nameDessert.meal,
          },

          isChecked: prev.bigDessert.isChecked,
          count: prev.bigDessert.count,
        },
      };
    });
  }, [dalyMenu]);

  const { handleSubmit } = useForm<FormState>();

  const onSubmit: SubmitHandler<FormState> = () => {
    // Здесь вы можете выполнить действия с данными формы
    console.log(formState);
  };

  return (
    <div className="order_wrap">
      {dalyMenu && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_body">
              <MenuItem
                object={dalyMenu.menu1}
                formState={formState}
                setFormState={setFormState}
                menuLabel={"Меню 1"}
              />

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
            <button className="submit">Відправити</button>
          </form>
        </>
      )}
    </div>
  );
};

export default OrderPage;
