import {FC} from 'react'
import { OrderItemProps } from './types';
import "./orderItem.scss"

const OrderItem: FC<OrderItemProps> = ({ object, label }) => {
       
    return (
      <>
        {object.isChecked && (
          <>
            <div className="orderItem_header">
                <h4>{label}</h4>
                <p>Порцій: <span>{object.count}</span></p>
            </div>
            <ol>
              {Object.values(object.dishes) .filter((dish) => dish !== "").map((dish, index) => (
                <li key={index}>{dish}</li>
              ))}
            </ol>
          </>
        )}
      </>
    );
  };

export default OrderItem