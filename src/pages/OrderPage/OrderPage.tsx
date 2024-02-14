import { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks";
import "./orderPage.scss";

const OrderPage:FC = () => {
  const dalyMenu = useAppSelector((state) => state.dalyMenu);

  useEffect(()=>{
console.log(dalyMenu)
  }, [])

  return (
    <div className="order_wrap">
      <fieldset>
        <legend>Меню 1</legend>
        {/* {dalyMenu.menu1.map((menu)=>{
        return(

        )
      })} */}
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
