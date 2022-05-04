 import axios from "axios";
 import { BASE_URL } from "../constants/Constants";

class HttpService {
  constructor() {
    axios.defaults.baseURL = BASE_URL;
    axios.defaults.timeout = 2000;
    axios.defaults.headers.common["Authorization"]="Athentication"

    axios.interceptors.request.use(
      (config) => {
        if(config.url==="orders"){
          config.headers["token"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwibmFtZSI6IkFtaXIgaG9zc2VpbiBNYWhkaW91biIsImlhdCI6MTY1MTY1ODQzNSwiZXhwIjoxNjUxNjY5MjM1fQ.usMMZjQN3VKw6_DwcVt1ssH4YW0cxVD4CYtzsJHjYyA"
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        //if(error.response.statusCode ===401) {}
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
      return res.data;
    } catch (err) {
      return err;
    }

  };

  post = async(url,data) => {
    try {
      const res = await axios.post(url,data);
      return res.data;
    } catch (err) {
      return err;
    }

  };

  patch = async(url,data) => {
    try {
      const resp = await axios.patch(url,data);
      return resp.data;
    } catch (err) {
      return err;
    }
  };

  delete = async(url,data) => {
    try {
      const resp = await axios.delete(url,data);
      return resp.data;
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


