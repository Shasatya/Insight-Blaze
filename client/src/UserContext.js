import { createContext, useState } from "react";

export let UserContext = createContext({});

export function UserContextProvider({children}){
    let [ userInfo, setUserInfo] = useState({});
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}