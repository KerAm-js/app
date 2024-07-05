import LogIn from "./components/LogIn/LogIn";
import Register from "./components/Register/Register";
import { handleError } from "./helpers/getErrorMessage";

const AuthModule = {
  LogIn,
  Register,
  handleError,
};

export default AuthModule;
