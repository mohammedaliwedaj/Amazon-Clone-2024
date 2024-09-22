import axios from "axios";

const axiosInstance = axios.create({
  //local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-fda88/us-central1/api",

  //live version of firebase functions
  // baseURL: "https://us-central1-clone-fda88.cloudfunctions.net/api",

  //deployed version of amzone server on render.com
  baseURL: "https://amazon-api-deploy-iita.onrender.com/",
});

export { axiosInstance };
