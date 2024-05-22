import { useState, useContext, createContext } from "react";

const UserDataContext = createContext(null);
export const userContext = () => {
    return useContext(UserDataContext);
}

export const ContextProvider = (props) => {
    const [apiKey, setApiKey] = useState("19f3ad0a347c4941932103234240905");
    const [place, setPlace] = useState("Raipur");
    return (
        <UserDataContext.Provider value={{apiKey, setApiKey, place, setPlace}}>
            {props.children}
        </UserDataContext.Provider>
    )
}