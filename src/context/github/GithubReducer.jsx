import { ACTION } from "../../actions/action";
const gitHubReducer = (state, action) => {
  switch (action.type) {
    case ACTION.GET_USER:
      return {
        ...state,
        users: action.payLoad,
        loading: false,
      };
    case ACTION.GET_REPO:
      return {
        ...state,
        repos: action.payLoad,
        loading: false,
      };
    case ACTION.SHOW_USER:
      return {
        ...state,
        showUser: action.payLoad,
        loading: false,
      };
    case ACTION.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTION.CLEAR:
      return {
        ...state,
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default gitHubReducer;
