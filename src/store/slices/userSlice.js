import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../query/userAPI";
import { setCookie, deleteCookie } from "../../helpers/cookieHelpers";

const initialState = {
  user: {
    id: "",
    userName: "",
    email: "",
    pixelNumbers: 0,
    companies: [
      {
        id: "1",
        wLink: "https://www.tesla.com/",
        descr: "cars",
        name: "Tesla",
        icon: "/assets/tempImgs/Tesla.png",
        pixels: 120,
      },
      {
        id: "2",
        name: "Google",
        wLink: "https://www.google.com.ua/?hl=ua",
        descr: "Search",
        icon: "https://cdn.vox-cdn.com/thumbor/OL7DhOr7h8yJgNaOFufI2Ym8-q8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
        pixels: 400,
      },
      {
        id: "3",
        name: "FaceBook",
        wLink: "https://uk-ua.facebook.com/",
        descr: "mark zuck",
        icon: "https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9",
        pixels: 3000,
      },
      {
        id: "4",
        name: "Apple",
        wLink: "https://www.apple.com/ua/",
        descr: "Tesla",
        icon: "https://yt3.googleusercontent.com/ytc/AIdro_lSCR60t1b_SOZmwySCG8AoaDLjKK11_iSFT0WyabwtfmU=s900-c-k-c0x00ffffff-no-rj",
        pixels: 8090,
      },
      {
        id: "5",
        wLink: "https://www.tesla.com/",
        descr: "cars",
        name: "Tesla",
        icon: "/assets/tempImgs/Tesla.png",
        pixels: 120,
      },
      {
        id: "6",
        name: "Google",
        wLink: "https://www.google.com.ua/?hl=ua",
        descr: "Search",
        icon: "https://cdn.vox-cdn.com/thumbor/OL7DhOr7h8yJgNaOFufI2Ym8-q8=/0x0:2040x1360/1400x1400/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
        pixels: 400,
      },
      {
        id: "7",
        name: "FaceBook",
        wLink: "https://uk-ua.facebook.com/",
        descr: "mark zuck",
        icon: "https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9",
        pixels: 3000,
      },
      {
        id: "8",
        name: "Apple",
        wLink: "https://www.apple.com/ua/",
        descr: "Tesla",
        icon: "https://yt3.googleusercontent.com/ytc/AIdro_lSCR60t1b_SOZmwySCG8AoaDLjKK11_iSFT0WyabwtfmU=s900-c-k-c0x00ffffff-no-rj",
        pixels: 8090,
      },
    ],
  },
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (builer) => {
    builer.addMatcher(
      userAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
        state.isAuthenticated = true;
        setCookie("token", payload.token, { secure: true, "max-age": 3600 });
      }
    );
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
