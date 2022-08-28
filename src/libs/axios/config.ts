import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";

let axiosInstance = axios.create({
  /*...*/
});
Session.addAxiosInterceptors(axiosInstance);

async function callAPI() {
  // use axios as you normally do
  let response = await axiosInstance.get("https://yourapi.com");
}
