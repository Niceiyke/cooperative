import { useContext } from "react"
import { ThemeContext } from "../contex/ThemeContext"


export const useThemeContext =()=>{
    
    const context =useContext(ThemeContext)

    return context
}