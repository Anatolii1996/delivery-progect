import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";
// import * as _ from "lodash";
import "./orderPage.scss";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  useEffect(() => {
    dispatch(getPossibleOrder())
  }, []);

  return (
    <div className="order_wrap">
      <fieldset>
        <legend>Меню 1</legend>
        {Object.values(dalyMenu.menu1).map((menuItem, index) => {
          return <p key={index}>{menuItem}</p>;
        })}
      </fieldset>
      <fieldset>
        <legend>Меню 2</legend>
      </fieldset>
      <fieldset>
        <legend>Десерт</legend>
      </fieldset>
    </div>
  );
};

export default OrderPage;
