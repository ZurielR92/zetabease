import { useContext } from "react"
import UIContext from "../context/ui/UIContext"





export const useTheme = () => {
    const {theme, setTheme} = useContext(UIContext);

    return {
        theme,
        setTheme
    }
}