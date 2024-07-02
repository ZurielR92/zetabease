import { Themes } from '@/core/types/Themes.type'
import { createContext } from 'react'


interface ContextProps {
    theme:Themes

   //Methods
   setTheme: (theme:Themes)=>void
}


const UIContext = createContext( {} as ContextProps )

export default UIContext