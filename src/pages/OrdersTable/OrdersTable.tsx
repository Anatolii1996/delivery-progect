import { FC, useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { getDalyOrders } from "../../redux/dalyOrdersSlice";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
import { IOrderType } from "./types";

const columns: TableProps<IOrderType>["columns"] = [
  {
    title: "№",
    dataIndex: "number",
  },
  {
    title: "Ім'я",
    dataIndex: "name",
  },
  {
    title: "Замовлення",
    dataIndex: "order",
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

const data: IOrderType[] = [
  {
    key: "1",
    number: 1,
    name: "John Brown",
    address: "New York No. 1 Lake Park",
    tel: "000",
    price: 12,
  },
  {
    key: "2",
    number: 2,
    name: "Jim Green",
    address: "London No. 1 Lake Park",
    tel: "000",
    price: 12,
  },
  {
    key: "3",
    number: 3,
    name: "Joe Black",
    address: "Sydney No. 1 Lake Park",
    tel: "000",
    price: 12,
  },
];

const OrdersTable: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDalyOrders());
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default OrdersTable;
