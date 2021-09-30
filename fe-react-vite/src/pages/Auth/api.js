import { get, post } from "../../utils/request";

export const test = () => get("/auth/test", { a: 1 });

export const register = (params) => post("/auth/register", params);

export const login = (params) => post("/auth/login", params);
