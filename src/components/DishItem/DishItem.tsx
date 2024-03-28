import { useState, FC, useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { DishItemProps } from "./types";
import cn from "classnames";
import "./dishItem.scss";
import { useAppSelector } from "../../hooks";
import Spinner from "../Spinner/Spinner";

const DishItem: FC<DishItemProps> = ({
  label,
  menuItem,
  index,
  setFormState,
}) => {
  const [isCrossed, setIsCrossed] = useState(false);

  const firstDish = useAppSelector(
    (state) => state.dalyMenu.menu1.firstDish.meal
  );

  const salad = useAppSelector((state) => state.dalyMenu.menu1.salad.meal);
  const isFirstRun = useRef(true);

  useEffect(() => {
    // console.log("firstRun");

    const getUpdatedValue = (label: string) => {
      switch (label) {
        case "firstDish":
          // Возвращаем значение для firstDish
          return firstDish;
        case "salad":
          // Возвращаем значение для salad
          return salad;
        // Добавьте другие case по мере необходимости
        default:
          return "";
      }
    };

    if (!isFirstRun.current) {
      // console.log("secondRun");
      setFormState((prev) => {
        return {
          ...prev,
          firstMenu: {
            ...prev.firstMenu,
            dishes: {
              ...prev.firstMenu.dishes,
              [label]: isCrossed ? "" : getUpdatedValue(label),
            },
          },
        };
      });
    } else {
      isFirstRun.current = false;
      // Первый запуск эффекта, устанавливаем isFirstRun в false
    }
  }, [isCrossed]);

  const infoClasses = cn({
    crossed: isCrossed,
  });

  return (
    <div className="dish_item">
      <li key={index}>
        <p className={infoClasses}>
          <span>{index + 1}.</span> {menuItem.meal}
        </p>
        {((label === "firstDish" || label === "salad")&&(menuItem.image)) && (
          <Icon
          className="cross"
            icon="fluent-emoji-flat:cross-mark"
            width="12"
            height="12"
            onClick={() => {
              // console.log(key)
              setIsCrossed(!isCrossed);
            }}
          />
        )}
        {menuItem.image ? (
          <img src={menuItem.image} alt="dishImage" />
        ) : (
          <Spinner />
        )}
      </li>
    </div>
  );
};

export default DishItem;
