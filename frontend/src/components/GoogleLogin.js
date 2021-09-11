import instance from "../helpers/axiosConfig";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function GoogleLogin() {
  const history = useHistory();
  const [cookies, setCookie] = useCookies([]);

  window.handleCredentialResponse = handleCredentialResponse;
  function handleCredentialResponse(response) {
    instance
      .post("/users/auth/google", { credential: response.credential })
      .then((res) => {
        console.log(res);
        instance.defaults.headers.common["x-access-token"] =
          res.data.token;
          instance.defaults.headers.common["user-id"] =
          res.data.type;
        setCookie("x-access-token", res.data.token, {
          pathname: "/",
          maxAge: 300 * 12 - 10,
        });
        setCookie("user-id", res.data.id, {
          pathname: "/",
          maxAge: 300 * 12 - 10,
        });
        setCookie("user-type", res.data.type, {
          pathname: "/",
          maxAge: 300 * 12 - 10,
        });
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={process.env.REACT_APP_CLIENT_ID}
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      ></div>
      <div
        class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}

export default GoogleLogin;
