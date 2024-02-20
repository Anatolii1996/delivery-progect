import { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";
import "./orderPage.scss";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  const [firstMenu, setFirstMenu] = useState([""]);

  useEffect(() => {
    dispatch(getPossibleOrder());
  }, []);

  useEffect(() => {
    const menu1Values = Object.values(dalyMenu.menu1);
    // console.log(menu1Values)

    for (const dish of menu1Values) {
      if (dish && dish.meal) {
        setFirstMenu((prev: string[]) => [...prev, dish.meal]);
        // console.log(dish.meal);
      }
    }

    // console.log(dishesArr)
  }, [dalyMenu]);

  return (
    <div className="order_wrap">
      <fieldset>
        <legend>Меню 1</legend>
        <ol>
          {firstMenu &&
            Array.from(new Set(firstMenu.filter((item) => item !== ""))).map(
              (menuItem, index) => <li key={index}>{menuItem}</li>
            )}
        </ol>
      </fieldset>
      <fieldset>
        <legend>Меню 2</legend>
        <ol>
          {/* {Object.values(dalyMenu.menu2).map((menuItem, index) => {
            return <li key={index}>{menuItem}</li>;
          })} */}
        </ol>
      </fieldset>
      <fieldset>
        <legend>Десерт</legend>
        {/* {<p>{dalyMenu.dessert}</p>} */}
      </fieldset>
    </div>
  );
};

export default OrderPage;
