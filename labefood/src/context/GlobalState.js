


import Router  from "../Routes/Router"


import { GlobalStateContext } from "./Context";

export const GlobalState = (props) => {


    return (
        <GlobalStateContext.Provider
            value={{}}
        >
            {props.children}
            {/* <Router /> */}
        </GlobalStateContext.Provider>
    );
};