import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { getPossibleOrder } from "../../redux/orderSlice";
import "./orderPage.scss";

const OrderPage: FC = () => {
  const dispatch = useAppDispatch();
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  useEffect(() => {
    dispatch(getPossibleOrder());
  }, []);

  return (
    <div className="order_wrap">
      <fieldset>
        <legend>Меню 1</legend>
        <ol>
          {dalyMenu &&
            Object.values(dalyMenu.menu1).map((menuItem, index) => {
              return (
                <li key={index}>
                  <p>{menuItem.meal}</p>
                  <img src={menuItem.image} alt="dishImage" />
                </li>
              );
            })}
          {/* {firstImage &&
            Array.from(new Set(firstImage.filter((item) => item !== ""))).map(
              (imgItem, index) => <img key={index} src={imgItem}/>
            )} */}
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
