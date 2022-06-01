
import { Provider } from "react-redux";
import { store } from "./";

function StoreProvider(props) {
  return (
    

    <Provider store={store}>
        {props.children}
    </Provider>
   
  );
}

export default StoreProvider;
