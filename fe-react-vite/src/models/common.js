export default {
  namespace: "common",
  state: {
    count: 0,
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    clear() {
      return {};
    },
  },
  effects: {},
};
