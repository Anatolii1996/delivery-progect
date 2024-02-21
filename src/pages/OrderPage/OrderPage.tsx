import { FC, useEffect, useState } from "react";
// import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues, FormState } from "./types";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";
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
    },
    secondMenu: {
      mainDish: "",
      dessert: "",
      isChecked: false,
    },
    bigDessert:{
      meal: "",
      isChecked: false,
    } 
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
        },
        secondMenu: {
          mainDish: dalyMenu.menu2.mainDish.meal,
          dessert: dalyMenu.menu2.dessert.meal,
          isChecked: prev.secondMenu.isChecked,
        },
        bigDessert:{
          meal:dalyMenu.bigDessert.meal,
          isChecked: prev.bigDessert.isChecked,
        } 
      };
    });
  }, [dalyMenu]);

  // const { register, handleSubmit } = useForm<FormValues>({});

  return (
    <div className="order_wrap">
      {dalyMenu && (
        <>
          <form
          //  onSubmit={handleSubmit(onSubmit)
          >
            <div className="form_body">
              <fieldset>
                <legend>Меню 1</legend>
                <label className="container">
                  <input
                    type="checkbox"
                    value="firstMenu"
                    onChange={(e) => {
                      const key: keyof FormState = e.target.value as keyof FormState;
                      const isChecked = e.target.checked;
                      console.log(key);
                      setFormState((prev) => {
                        return {
                          ...prev,
                          [key]: {
                            ...prev[key], // обновляем только вложенный объект, соответствующий ключу
                            isChecked: isChecked,
                          },
                        };
                      });
                    }}
                  />
                  <div className="checkmark"></div>
                </label>
                <ol>
                  {Object.values(dalyMenu.menu1).map((menuItem, index) => (
                    <li key={index}>
                      <p>
                        <span>{index + 1}.</span> {menuItem.meal}
                      </p>
                      <img src={menuItem.image} alt="dishImage" />
                    </li>
                  ))}
                </ol>
              </fieldset>
              <fieldset>
                <legend>Меню 2</legend>
                <label className="container">
                  <input type="checkbox" value="secondMenu"
                    onChange={(e) => {
                      const key: keyof FormState = e.target.value as keyof FormState;
                      const isChecked = e.target.checked;
                      console.log(key);
                      setFormState((prev) => {
                        return {
                          ...prev,
                          [key]: {
                            ...prev[key], // обновляем только вложенный объект, соответствующий ключу
                            isChecked: isChecked,
                          },
                        };
                      });
                    }}/>
                  <div className="checkmark"></div>
                </label>
                <ol>
                  {Object.values(dalyMenu.menu2).map((menuItem, index) => (
                    <li key={index}>
                      <p>
                        <span>{index + 1}.</span> {menuItem.meal}
                      </p>
                      <img src={menuItem.image} alt="dishImage" />
                    </li>
                  ))}
                </ol>
              </fieldset>
              <fieldset>
                <legend>Десерт</legend>
                <label className="container">
                  <input type="checkbox" value="bigDessert"
                    onChange={(e) => {
                      const key: keyof FormState = e.target.value as keyof FormState;
                      const isChecked = e.target.checked;
                      console.log(key);
                      setFormState((prev) => {
                        return {
                          ...prev,
                          [key]: {
                            ...prev[key], // обновляем только вложенный объект, соответствующий ключу
                            isChecked: isChecked,
                          },
                        };
                      });
                    }}/>
                  <div className="checkmark"></div>
                </label>
                <div className="dessert_wrap">
                  <p>{dalyMenu.bigDessert.meal}</p>
                  <img src={dalyMenu.bigDessert.image} alt="dishImage" />
                </div>
              </fieldset>
            </div>
            <button className="submit">Відправити</button>
          </form>
        </>
      )}
    </div>
  );
};

export default OrderPage;
