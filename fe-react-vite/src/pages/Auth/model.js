import * as Api from "./api";

export default {
  namespace: "auth",
  state: {
    userInfo: {},
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *register({ payload = {} }, { call, put }) {
      const { code, data } = yield call(Api.register, payload);
      return code === 0;
    },
    *login({ payload = {} }, { call, put }) {
      const { code, data, msg } = yield call(Api.login, payload);
      if (code === 0) {
        yield put({
          type: "save",
          payload: {
            userInfo: data,
          },
        });
      }
      return {
        code,
        msg,
      };
    },
  },
};
