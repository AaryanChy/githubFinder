import { ACTION } from "../../actions/action";
const gitHubReducer = (state, action) => {
  console.log(action.payLoad);
  switch (action.type) {
    case ACTION.GET_USER:
      return {
        ...state,
        users: action.payLoad,
        loading: false,
      };
    case ACTION.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTION.CLEAR:
      return {
        users: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default gitHubReducer;
