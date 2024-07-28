import { createContext, useReducer } from "react";
import { AlertReducer } from "./AlertReducer";
import { ACTION } from "../../actions/action";
export const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  const setAlert = (message, type) => {
    dispatch({
      type: ACTION.SET_ALERT,
      payload: { message, type },
    });

    setTimeout(() => {
      dispatch({ type: ACTION.REMOVE_ALERT });
    }, 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
