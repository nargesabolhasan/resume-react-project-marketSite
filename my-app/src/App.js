import "./assets/Core-ui/Core-styles.scss"
import axios from "axios"
import HttpService from "./axios/HttpService"
import react,{useState,useEffect} from "react"
function App() {
  

  useEffect(() => {
    // console.log(HttpService.get("orders",true))
   let hpp=HttpService.get("products")
  .then((response) => {console.log(response)})

  })

  return (
    <div style={{fontFamily:"koodak"}}>
     
    </div>
  );
}

export default App;
