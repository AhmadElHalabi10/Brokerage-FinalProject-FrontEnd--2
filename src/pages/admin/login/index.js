// import LoginComponent from "/home/ahmad/Desktop/Final-Project/Brokerage-Repository/Brokerage-FinalProject-FrontEnd/almorad/src/components/admin/loginComponent";
// import axios from "axios";
import login from "../../../uploads/loginImage.jpg";
function LoginAdmin() {
  return (
    <section className="loginAdmin">
      <section className="loginAdmin-left">
        <img src={login} alt="login_image" />
      </section>
      {/* <section className="loginAdmin-right">
        <LoginComponent />
      </section> */}
    </section>
  );
}
export default LoginAdmin;
