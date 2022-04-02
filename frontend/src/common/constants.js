// Author: Anuj Dev (B00900887)

/* ROUTERS  */
export const ROUTES = {
  // COMMON ROUTES
  HOMEPAGE: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  SIGNUP_FOOD_OWNER: "/signupFoodOwner",
  LOGOUT: "/logout",
  NOT_FOUND: "*",
  ERROR: "/error",
  POST_FOOD: "/addFood",
};

/* Authentication */
export const TOKEN = "TOKEN";
export const USER = "USER";
export const ADMIN = "ADMIN";
export const USER_ID = "USER_ID";
export const ROLE = "ROLE";

export const APP_ROLES = {
  APP_USER: "app_user",
  FOOD_OWNER: "food_owner",
};
