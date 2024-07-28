import { createContext, useReducer } from "react";
import gitHubReducer from "./GithubReducer";
export const GithubContext = createContext();
import { ACTION } from "../../actions/action";
const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    showUser: {},
    repos: [],
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

  //Getting a single user
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = "./notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: ACTION.SHOW_USER,
        payLoad: data,
      });
    }
  };

  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    dispatch({
      type: ACTION.GET_REPO,
      payLoad: data,
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
        showUser: state.showUser,
        repos: state.repos,
        searchUsers,
        clearScreen,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
