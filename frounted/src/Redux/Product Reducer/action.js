import axios from "axios";

export const GET_REQUIEST = "GET_REQUIEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";

export const GET_REQUIEST_FILTER = "GET_REQUIEST_FILTER";
export const GET_SUCCESS_FILTER = "GET_SUCCESS_FILTER";
export const GET_ERROR_FILTER = "GET_ERROR_FILTER";

export const SORTDATA_HTL = "SORTDATA_HTL";
export const SORTDATA_LTH = "SORTDATA_LTH";
export const SORTDATA_RATINGD = "SORTDATA_RATINGD";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const getRequiest = () => ({
  type: GET_REQUIEST,
});

const getSuccess = (payload) => ({
  type: GET_SUCCESS,
  payload,
});

const getError = () => ({
  type: GET_ERROR,
});

export const getData = (id) => async (dispatch) => {
  dispatch(getRequiest());
  try {
    let { data } = await axios.get(
      "https://bestbuy-backend.onrender.com/products"
    );

    let finaldata;
    if (id !== "topdeals") {
      let filter = data.data.filter((el) => {
        return el.brand[0] === id;
      });
      finaldata = filter;
      console.log(filter);
    } else {
      finaldata = data.data;
    }
    // let post = await axios.post("http://localhost:8080/filter", { finaldata });
    // console.log(post);
    dispatch(getSuccess(finaldata));
  } catch (e) {
    console.log(e);
    dispatch(getError());
  }
};

const succsessFilter = (payload) => ({
  type: GET_SUCCESS_FILTER,
  payload,
});

export const getFilterData = (params) => async (dispatch) => {
  try {
    let { data } = await axios.get(
      "https://bestbuy-backend.onrender.com/filter",
      { params }
    );
    dispatch(succsessFilter(data.data));
    console.log(params);
  } catch (e) {
    console.log(e);
  }
};

const htl = () => ({
  type: SORTDATA_HTL,
});

const lth = () => ({
  type: SORTDATA_LTH,
});

const sortByRating = () => ({
  type: SORTDATA_RATINGD,
});

export const sortData = (val) => (dispatch) => {
  switch (val) {
    case "htl":
      dispatch(htl());
      break;
    case "lth":
      dispatch(lth());
      break;
    case "sr":
      dispatch(sortByRating());
      break;
    default:
      return "Not a valid";
  }
};

export const Login = (payload) => ({
  type: LOGIN,
  payload,
});

export const userAuth = (data, navigate) => async (dispatch) => {
  try {
    const url = "https://bestbuy-backend.onrender.com/api/auth";
    const res = await axios.post(url, data);

    let token = res.data.message;
    let user = res.data.userdata;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log(res);
    alert(res.data.message);

    if (token) {
      navigate("/");
    }
    // window.location = "/";

    dispatch(Login(user.firstName));
    console.log(res.message);
  } catch (err) {
    console.log(err);
  }
};

const logout = () => ({
  type: LOGOUT,
});

export const Logout = () => (dispatch) => {
  dispatch(logout());
};
