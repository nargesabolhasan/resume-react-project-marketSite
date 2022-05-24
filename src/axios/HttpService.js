 import axios from "axios";
 import { BASE_URL } from "../constants/Constants";

class HttpService {
   
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.timeout = 2000;
    axios.interceptors.request.use(
      (config) => {
        if(config.url==="orders" ){
          config.headers["token"]=localStorage.getItem("token")
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        // if(response.statusCode ===401) {
        //   alert ("you have  to set token")
        // }
         
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  get = async(url) => {
    try {
      const res = await axios.get(url);
      return res;
    } catch (err) {
      return err;
    }

  };

  post = async(url,data) => {
    try {
      const res = await axios.post(url,data);
      return res;
    } catch (err) {
      return err;
    }

  };

  patch = async(url,data,needToken=false) => {
    try {
      const res = await axios.patch(url,data);
      return res.data;
    } catch (err) {
      return err;
    }
  };

  delete = async(url,data) => {
    try {
      const res = await axios.delete(url,data);
      return res;
    } catch (err) {
      return err;
    }
  };

  cancel() {
    const abortHandler = new AbortController();
    abortHandler.abort();
  }
}

export default  new HttpService();


