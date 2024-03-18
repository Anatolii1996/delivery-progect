import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getDalyOrders } from "../../redux/dalyOrdersSlice";
import { Table, ConfigProvider } from "antd";
import type { TableProps } from "antd";
import { IOrderType } from "./types";
import "./orderTable.scss";

const columns: TableProps<IOrderType>["columns"] = [
  {
    title: "№",
    dataIndex: "number",
  },

  {
    title: "Замовлення",
    dataIndex: "body",
    render: (body: string[]) => (
      <div>
        {body.map((item, index) => {
          const title = item.split(":")[0];
          const count = item.split(":")[1].split(",")[1]; // Получаем только часть до ":"
          const body = item.split(":")[1].split(",").slice(3).join(","); // Получаем только часть до ":"
          return (
            <div key={index}>
              <div className="order_header">
                <div>{title.trim()}</div>
                <div>Кількість: {count.trim()}</div>
              </div>
              <div>{body}</div>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    title: "Адреса",
    dataIndex: "address",
  },

  {
    title: "Тел.",
    dataIndex: "tel",
  },
  {
    title: "Вартість",
    dataIndex: "price",
  },
];

const OrdersTable: FC = () => {
  const dispatch = useAppDispatch();

  const dalyOrders = useAppSelector((state) => state.dalyOrders);
  const [data, setData] = useState<IOrderType[]>([]);

  useEffect(() => {
    dispatch(getDalyOrders());
  }, []);

  useEffect(() => {
    setDalyOrders();
  }, [dalyOrders]);

  const setDalyOrders = () => {
    const newData = dalyOrders.map((order, index) => ({
      key: `${index}`,
      number: index + 1,
      address: order.address,
      body: Object.entries(order.details).map(
        ([key, value]) => `${key}: ${Object.entries(value)}`
      ),
      tel: order.tel,
      price: order.price,
    }));
    setData(newData);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#7e7575",
            borderColor:"#1b1b1b",
            rowHoverBg:"#a6e3aa",
            
          },
        },
      }}
    >
      <Table columns={columns} dataSource={data} />
    </ConfigProvider>
  );
};

export default OrdersTable;
