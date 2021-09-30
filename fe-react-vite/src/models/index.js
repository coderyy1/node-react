import common from "./common";
import auth from "../pages/Auth/model";

export default function registerModels(app) {
  app.model(common);
  app.model(auth);
}
