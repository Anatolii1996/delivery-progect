import { FC } from "react";
import { MenuItemProps } from "./types";
import OrderItem from "../OrderItem/OrderItem";

const MenuItem: FC<MenuItemProps> = ({
  object,
  setFormState,
  formState,
  menuLabel,
}) => {
  const currentMenuKey: "firstMenu" | "secondMenu"|"bigDessert" = (() => {
    switch (menuLabel) {
      case "Меню 1":
        return "firstMenu";
      case "Меню 2":
        return "secondMenu";
      case "Десерт":
        return "bigDessert";
      default:
        return "firstMenu"; // или другое значение по умолчанию, если нужно
    }
  })();

  return (
    <fieldset>
      <legend>{menuLabel}</legend>
      <div className="order_header">
        <label>
          Кількість порцій:{" "}
          <input
            type="number"
            value={formState[currentMenuKey]?.count}
            onChange={(e) => {
              // console.log(e.target.value);
              setFormState((prev: any) => {
                if (currentMenuKey && +e.target.value < 0) {
                  return prev;
                } else {
                  return {
                    ...prev,
                    [currentMenuKey]: {
                      ...prev[currentMenuKey],
                      count: +e.target.value,
                      isChecked: +e.target.value > 0 ? true : false,
                    },
                  };
                }
              });
            }}
          />
        </label>
        <label className="container">
          <input
            type="checkbox"
            checked={formState[currentMenuKey]?.isChecked}
            onChange={(e) => {
              const isChecked = e.target.checked;
              // console.log(key);
              setFormState((prev: any) => {
                return {
                  ...prev,
                  [currentMenuKey]: {
                    ...prev[currentMenuKey], // обновляем только вложенный объект, соответствующий ключу
                    isChecked: !prev[currentMenuKey].isChecked,
                    count: isChecked ? 1 : 0,
                  },
                };
              });
            }}
          />
          <div className="checkmark"></div>
        </label>
      </div>
      <ol>
        {Object.entries(object).map(([key, menuItem], index) => (
          <OrderItem key={key} label={key} menuItem={menuItem} index={index} />
        ))}
      </ol>
    </fieldset>
  );
};

export default MenuItem;
