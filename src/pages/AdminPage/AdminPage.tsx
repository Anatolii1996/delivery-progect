import { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import moment from "moment";
import { getDishes } from "../../redux/dishesSlice";
import "./adminPage.scss";

const AdminPage = () => {
  const [toDay] = useState(moment().format("DD.MM.YY"));

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
                <option value="value1">Значение 1</option>
                <option value="value2">
                  Значение 1ddddddddddddddddddddddddddddddddddddddddd
                </option>
                <option value="value3">Значение 3</option>
              </select>
            </div>
          </li>
          <li>
            {" "}
            <div className="order_box">
              <label htmlFor="secondDish">Друга страва:</label>
              <select name="secondDish" id="secondDish">
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
              </select>
            </div>
          </li>
          <li>
            {" "}
            <div className="order_box">
              <label htmlFor="sideDish">Гарнір:</label>
              <select name="sideDish" id="sideDish">
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
              </select>
            </div>
          </li>
          <li>
            {" "}
            <div className="order_box">
              <label htmlFor="salad">Салат:</label>
              <select name="salad" id="salad">
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
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
                <option value="value1">Значение 1</option>
                <option value="value2">
                  Значение 1ddddddddddddddddddddddddddddddddddddddddd
                </option>
                <option value="value3">Значение 3</option>
              </select>
            </div>
          </li>
          <li>
            {" "}
            <div className="order_box">
              <label htmlFor="dessert">Десерт:</label>
              <select name="dessert" id="dessert">
                <option value="value1">Значение 1</option>
                <option value="value2">Значение 2</option>
                <option value="value3">Значение 3</option>
              </select>
            </div>
          </li>
        </ol>
      </fieldset>

      <fieldset className="dessert">
        <legend>Десерт </legend>

        <select name="firstDish" id="firstDish">
          <option value="value1">Значение 1</option>
          <option value="value2">
            Значение 1ddddddddddddddddddddddddddddddddddddddddd
          </option>
          <option value="value3">Значение 3</option>
        </select>
      </fieldset>
    </div>
  );
};

export default AdminPage;
