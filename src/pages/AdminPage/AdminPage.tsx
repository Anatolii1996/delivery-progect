import { useState, useEffect, FC, useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { CurrentDateContext } from "../../context";
import { FormValues } from "./types";
import { getDishes } from "../../redux/dishesSlice";
import { changeDalyMenu } from "../../redux/menuSlice";
import "./adminPage.scss";
import DeliveryMap from "../../components/OrdersTable/OrdersTable";

const AdminPage: FC = () => {
  const currentDate = useContext(CurrentDateContext);
  const dalyMenuDate = useAppSelector((state) => state.dalyMenu.date);
  const [isToday, setIsToday] = useState(false);

  const firstDishes = useAppSelector((state) => state.menu.dishes.firstDishes);
  const secondDishes = useAppSelector(
    (state) => state.menu.dishes.secondDishes
  );
  const sideDishes = useAppSelector((state) => state.menu.dishes.sideDishes);
  const salads = useAppSelector((state) => state.menu.dishes.salads);
  const desserts = useAppSelector((state) => state.menu.dishes.desserts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDishes());
  }, []);

  useEffect(() => {
    if (dalyMenuDate) {
      // console.log(toDay);
      // console.log(dalyMenuDate);
      if (currentDate === dalyMenuDate) {
        setIsToday(true);
      }
      // console.log(toDay === dalyMenuDate);
    }
  }, [currentDate, dalyMenuDate]);

  const { register, handleSubmit, setValue } = useForm<FormValues>({});

  useEffect(() => {
    if (firstDishes) {
      setValue("firstDish", firstDishes[0]);
      setValue("secondDish", secondDishes[0]);
      setValue("salad", salads[0]);
      setValue("mainDish", secondDishes[0]);
      setValue("dessert", desserts[0]);
      setValue("bigDessert", desserts[0]);
    }
  }, [firstDishes, secondDishes, salads, desserts, setValue]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Здесь вы можете выполнить действия с данными формы
    console.log(data);
    dispatch(changeDalyMenu(data));
  };

  return (
    <div className="admin_wrap">
      {isToday?<>
      <DeliveryMap/>
      </>:<>
      <h2>Будь-ласка оберіть меню на {currentDate}!</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="first_menu">
          <legend>Меню 1 </legend>

          <ol>
            <li>
              <div className="order_box">
                <label htmlFor="firstDish">Перша страва:</label>
                <select id="firstDish" {...register("firstDish")}>
                  {firstDishes ? (
                    firstDishes.map((dish) => {
                      return (
                        <option key={dish} value={dish}>
                          {dish}
                        </option>
                      );
                    })
                  ) : (
                    <option>Не вдалося отримати страви</option>
                  )}
                </select>
              </div>
            </li>
            <li>
              {" "}
              <div className="order_box">
                <label htmlFor="secondDish">Друга страва:</label>
                <select {...register("secondDish")} id="secondDish">
                  {secondDishes ? (
                    secondDishes.map((dish) => {
                      return (
                        <option key={dish} value={dish}>
                          {dish}
                        </option>
                      );
                    })
                  ) : (
                    <option>Не вдалося отримати страви</option>
                  )}
                </select>
              </div>
            </li>
            <li>
              {" "}
              <div className="order_box">
                <label htmlFor="sideDish">Гарнір:</label>
                <select {...register("sideDish")} id="sideDish">
                  <option value=""></option>
                  {sideDishes ? (
                    sideDishes.map((dish) => {
                      return (
                        <option key={dish} value={dish}>
                          {dish}
                        </option>
                      );
                    })
                  ) : (
                    <option>Не вдалося отримати страви</option>
                  )}
                </select>
              </div>
            </li>
            <li>
              {" "}
              <div className="order_box">
                <label htmlFor="salad">Салат:</label>
                <select {...register("salad")} id="salad">
                  {salads ? (
                    salads.map((salad) => {
                      return (
                        <option key={salad} value={salad}>
                          {salad}
                        </option>
                      );
                    })
                  ) : (
                    <option>Не вдалося отримати страви</option>
                  )}
                </select>
              </div>
            </li>
            <li>
              {" "}
              <p>Хліб</p>
            </li>
          </ol>
        </fieldset>

        <fieldset className="second_menu">
          <legend>Меню 2 </legend>

          <ol>
            <li>
              <div className="order_box">
                <label htmlFor="mainDish">Основна страва:</label>
                <select {...register("mainDish")} id="mainDish">
                  {secondDishes ? (
                    secondDishes.map((dish) => {
                      return (
                        <option key={dish} value={dish}>
                          {dish}
                        </option>
                      );
                    })
                  ) : (
                    <option>Не вдалося отримати страви</option>
                  )}
                </select>
              </div>
            </li>
            <li>
              {" "}
              <div className="order_box">
                <label htmlFor="dessert">Десерт:</label>
                <select {...register("dessert")} id="dessert">
                  {desserts ? (
                    desserts.map((dessert) => {
                      return (
                        <option key={dessert} value={dessert}>
                          {dessert}
                        </option>
                      );
                    })
                  ) : (
                    <option>Не вдалося отримати страви</option>
                  )}
                </select>
              </div>
            </li>
          </ol>
        </fieldset>

        <fieldset className="dessert">
          <legend>Десерт </legend>

          <select {...register("bigDessert")} id="bigDessert">
            {desserts ? (
              desserts.map((dessert) => {
                return (
                  <option key={dessert} value={dessert}>
                    {dessert}
                  </option>
                );
              })
            ) : (
              <option>Не вдалося отримати страви</option>
            )}
          </select>
        </fieldset>
        <button className="submit" disabled={isToday ? true : false}>
          Відправити
        </button>
      </form>
      </>}
      
    </div>
  );
};

export default AdminPage;
