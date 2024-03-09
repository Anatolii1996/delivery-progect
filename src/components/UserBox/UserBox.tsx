import { FC } from "react";
// import { useForm, Resolver } from "react-hook-form";
import { UserBoxProps } from "./type";
import cn from "classnames";
import moment from "moment";

const UserBox: FC<UserBoxProps> = ({
  label,
  formState,
  handleFormChange,
  register,
  errors,
  note,
}) => {
  const infoClasses = {
    address: cn({
      info: formState.address,
    }),
    tel: cn({
      info: formState.tel,
    }),
    comment: cn({
      info: formState.comment,
    }),
  };

  return (
    <div className="user_box">
      <input
        type="text"
        autoComplete="off"
        className="input"
        {...register(label)}
        value={formState[label]}
        onChange={handleFormChange}
      />
      <label className={infoClasses[label]}>{note}</label>
      <p>{errors[label]?.message}</p>
    </div>
  );
};

export default UserBox;
