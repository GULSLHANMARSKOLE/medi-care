import {createContext, useContext,useEffect,useState} from "react"
const Themecontext=createContext();
export function ThemeProvider({children}){
    const [darkMode,setDarkMode]=useState(
        localStorage.getItem("theme")==="dark"
    );
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        }
        else{
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    },[darkMode]);
    return (<Themecontext.Provider value={{darkMode,setDarkMode}}>
        {children}
    </Themecontext.Provider>
    );
}
export function useTheme(){
    return useContext(Themecontext);
}