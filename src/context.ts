/* eslint-disable */
import {createContext}  from "react";
import moment from "moment";

export const CurrentDateContext = createContext(moment().format("DD.MM.YYYY"));