import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import moment from "moment";
import { getDishes } from "../../redux/dishesSlice";
import "./adminPage.scss";

const AdminPage = () => {
  const [toDay] = useState(moment().format("DD.MM.YY"));

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

  return (
    <div className="admin_wrap">
      <h2>Будь-ласка оберіть меню на {toDay}!</h2>
      <fieldset className="first_menu">
        <legend>Меню 1 </legend>

        <ol>
          <li>
            <div className="order_box">
              <label htmlFor="firstDish">Перша страва:</label>
              <select name="firstDish" id="firstDish">
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
              <select name="secondDish" id="secondDish">
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
              <select name="sideDish" id="sideDish">
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
              <select name="salad" id="salad">
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
              <label htmlFor="firstDish">Основна страва:</label>
              <select name="firstDish" id="firstDish">
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
              <select name="dessert" id="dessert">
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

        <select name="firstDish" id="firstDish">
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
    </div>
  );
};

export default AdminPage;
