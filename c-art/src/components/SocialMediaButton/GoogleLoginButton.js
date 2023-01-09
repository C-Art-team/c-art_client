import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useEffect } from "react";
import { handleGoogleLogin } from "../../actions/userAction";
import { Login } from "@etouraille/react-google-login";
import "./style.css";

export default function GoogleLoginButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const google = window.google;
  const client_id =
    "37319788046-ulj21qf9h47kru6g358mntt85h61jl95.apps.googleusercontent.com";

  function handleCredentialResponse(response) {
    dispatch(handleGoogleLogin(response.credential))
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
  }
  function handleResponseError(response) {
    console.log(response);
  }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "37319788046-ulj21qf9h47kru6g358mntt85h61jl95.apps.googleusercontent.com",
  //     callback: handleCredentialResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
  //     type: "icon",
  //     theme: "filled_black",
  //     size: "large",
  //     shape: "circle",
  //   });
  // }, []);

  return (
    <>
      {/* <div id="buttonDiv"></div> */}
      <Login
        content={(login) => {
          return (
            <a href="#" onClick={login}>
              <div className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
                G
              </div>
            </a>
          );
        }}
        client_id={client_id}
        onSuccess={handleCredentialResponse}
        onFailure={handleResponseError}
      ></Login>
    </>
  );
}
