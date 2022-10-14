import { GoogleLogin } from "react-google-login";
import axios from "axios";

const url = "http://localhost:5000/user/googleSignIn";
const responseGoogleSuccess = async (response) => {
  try {
    const data = { idToken: response.tokenId };

    const result = await axios.post(url, data);
    localStorage.setItem("user", JSON.stringify(result.data));
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
const responseGoogleError = (response) => {
  console.log(response);
};

export default function App() {
  return (
    <div className="App ">
      <GoogleLogin
        clientId="560810482034-ce0bgfqr5s8ondmepn2du8gguf7uiv8r.apps.googleusercontent.com"
        buttonText="Sing in with google"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
