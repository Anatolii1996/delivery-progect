import { FC } from "react";
import { Icon } from "@iconify/react";
import "./loginPage.scss";

const LoginPage: FC = () => {
  return (
    <div className="login_wrap">
      <div className="login_header">
        <div className="logIn_button">
          <Icon
            className="animate__animated animate__fadeInDownBig"
            icon="solar:chef-hat-outline"
            width="48"
            height="48"
          />
          <button className="cta">
            <span>Увійти</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
        <Icon className="fork" icon="mingcute:fork-fill" width="48" height="48" />
        <Icon icon="mdi:knife" width="48" height="48" />
      </div>
    </div>
  );
};

export default LoginPage;
