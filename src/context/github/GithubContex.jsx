import { createContext, useReducer } from "react";
import gitHubReducer from "./GithubReducer";
export const GithubContext = createContext();
import { ACTION } from "../../actions/action";
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: ACTION.GET_USER,
      payLoad: items,
    });
  };

  const setLoading = () => {
    dispatch({ type: ACTION.LOADING });
  };

  const clearScreen = () => {
    dispatch({ type: ACTION.CLEAR });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearScreen,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
