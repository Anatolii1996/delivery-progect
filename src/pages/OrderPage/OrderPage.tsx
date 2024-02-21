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
      {dalyMenu && (
        <>
          <form>
            <div className="form_body">
              <fieldset>
                <legend>Меню 1</legend>
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
