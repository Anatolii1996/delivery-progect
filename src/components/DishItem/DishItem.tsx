import { useState, FC } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { OrderItemProps } from "./types";
import cn from "classnames";
import "./dishItem.scss";

const DishItem: FC<OrderItemProps> = ({ label, menuItem, index }) => {
  const [isCrossed, setIsCrossed] = useState(false);

  const infoClasses = cn({
    crossed: isCrossed,
  });

  return (
    <div className="order_item">
      <li key={index}>
        <p className={infoClasses}>
          <span>{index + 1}.</span> {menuItem.meal}
        </p>
        {(label === "firstDish" || label === "salad") && (
          <Icon
            icon="fluent-emoji-flat:cross-mark"
            width="12"
            height="12"
            onClick={(e) => {
              // console.log(key)
              setIsCrossed(!isCrossed);
            }}
          />
        )}
        <img src={menuItem.image} alt="dishImage" />
      </li>
    </div>
  );
};

export default DishItem;
