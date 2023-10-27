import { createContext, useState } from "react";



 export const ThemeContext =createContext()



export default function ThemeContextProvider({children}) {

    const [lightTheme,setLightTheme]=useState({bg:'bg.gray-100',text:"text-gray-400"})
    const [darkTheme,setDarkTheme]=useState({bg:'bg.gray-700',text:"text-gray-300"})
  return (
    <ThemeContext.Provider value={{lightTheme,setLightTheme,darkTheme,setDarkTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}


