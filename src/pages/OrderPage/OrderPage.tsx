import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "./types";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";
import "./orderPage.scss";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  useEffect(() => {
    dispatch(getPossibleOrder());
  }, []);

  const [formState, setFormState] = useState({
    firstMenu: {
      firstDish: {
        meal: "",
        checked: false,
      },
      secondDish: {
        meal: "",
        checked: false,
      },
      sideDish: {
        meal: "",
        checked: false,
      },
      salad: {
        meal: "",
        checked: false,
      },
      bread: false,
    },
    secondMenu: {
      mainDish: {
        meal: "",
        checked: false,
      },
      dessert: {
        meal: "",
        checked: false,
      },
    },
    bigDessert: {
      meal: "",
      checked: false,
    },
  });

  useEffect(() => {
    setFormState((prev) => {
      return {
        firstMenu: {
          firstDish: {
            meal: dalyMenu.menu1.firstDish.meal,
            checked: prev.firstMenu.firstDish.checked,
          },
          secondDish: {
            meal: dalyMenu.menu1.secondDish.meal,
            checked: prev.firstMenu.secondDish.checked,
          },
          sideDish: {
            meal: dalyMenu.menu1.sideDish.meal,
            checked: prev.firstMenu.sideDish.checked,
          },
          salad: {
            meal: dalyMenu.menu1.salad.meal,
            checked: prev.firstMenu.salad.checked,
          },
          bread: prev.firstMenu.bread,
        },
        secondMenu: {
          mainDish: {
            meal: dalyMenu.menu2.mainDish.meal,
            checked: prev.secondMenu.mainDish.checked,
          },
          dessert: {
            meal: dalyMenu.menu2.dessert.meal,
            checked: prev.secondMenu.dessert.checked,
          },
        },
        bigDessert: {
          meal: dalyMenu.bigDessert.meal,
          checked: prev.bigDessert.checked,
        },
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
                <ol>
                  {Object.entries(dalyMenu.menu1).map(
                    ([key, menuItem], index) => (
                      <li key={index}>
                        <label className="container">
                          <input
                            type="checkbox"
                            onChange={(e) => {
                              const isChecked = e.target.checked;
                              // console.log(isChecked);
                              // console.log(key);
                              // console.log(menuItem.meal);

                              setFormState((prev) => {
                                return {
                                  ...prev,
                                  firstMenu: {
                                    ...prev.firstMenu,
                                    [key]: {
                                      meal: menuItem.meal,
                                      checked: isChecked, // Toggle the checked state
                                    },
                                  },
                                };
                              });
                            }}
                          />
                          <div className="checkmark"></div>
                        </label>
                        <p>
                          <span>{index + 1}.</span> {menuItem.meal}
                        </p>
                        <img src={menuItem.image} alt="dishImage" />
                      </li>
                    )
                  )}
                </ol>
              </fieldset>
              <fieldset>
                <legend>Меню 2</legend>
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
