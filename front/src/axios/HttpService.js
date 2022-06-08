 import axios from "axios";
 import { BASE_URL } from "../constants/Constants";

class HttpService {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.timeout = 6000;
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

  post = async(url,data,needToken=null) => {
    try {
      const res = await axios.post(url,data,needToken);
      return res;
    } catch (err) {
      return err;
    }
  };

  patch = async(url,data,needToken=null) => {
    try {
      const res = await axios.patch(url,data,needToken);
      return res;
    } catch (err) {
      return err;
    }
  };

  delete = async(url,needToken=null) => {
    try {
      const res = await axios.delete(url,needToken);
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


