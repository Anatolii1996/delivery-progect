import { useAppSelector } from "../../hooks";
import { Outlet } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const userName = useAppSelector((state) => state.userState.userInfo.name);

  return (
    <>
      <div className="header_wrap">
        <p>{userName ? userName : "Гість"}</p>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
