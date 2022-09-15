import { Router } from "../routes/Router"
import { GlobalStateContext } from "./Context";

export const GlobalState = (props) => {


    return (
        <GlobalStateContext.Provider
            value={{}}
        >
            {props.children}
            <Router />
        </GlobalStateContext.Provider>
    );
};