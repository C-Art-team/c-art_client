import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleFacebookLogin } from "../../actions/userAction";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function FacebookLoginButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseFacebook = (res) => {
    dispatch(handleFacebookLogin(res))
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        localStorage.setItem("preference", data.preference);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FacebookLogin
      appId="1381227489081903"
      fields="name,email,picture"
      callback={responseFacebook}
      render={(renderProps) => (
        <a href="#">
          <span
            onClick={renderProps.onClick}
            className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white"
          >
            f
          </span>
        </a>
      )}
    />
  );
}
