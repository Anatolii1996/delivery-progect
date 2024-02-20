import { Outlet } from "react-router-dom";
import "./footer.scss"

const Footer = () => {
  return <>
  <Outlet/>
  <div className="footer_wrap">
   <p>Розробка -</p>
   <a href="https://anatolii-portfolio-ts.netlify.app/" target="_blank">https://anatolii-portfolio-ts.netlify.app</a>
  </div>
  </>
};

export default Footer;
