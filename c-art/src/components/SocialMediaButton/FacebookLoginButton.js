import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleFacebookLogin } from "../../actions/userAction";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { toast } from "react-toastify";

export default function FacebookLoginButton({ setModal, setUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const responseFacebook = (res) => {
    dispatch(handleFacebookLogin(res))
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("username", data.username);
        if (!data.preference) {
          if(setUser){
            setUser({
              id: data.id,
              username: data.username,
            });
          }
          setModal(true);
        } else {
          localStorage.setItem("preference", data.preference);
          toast.success(`Welcome, ${data.username}`);
          navigate("/");
        }
      })
      .catch((error) => {
        error.message
          ? toast.warn(`${error?.message}`)
          : toast.error("Internal Server Error");
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
