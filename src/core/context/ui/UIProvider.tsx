import { FC, ReactNode, useReducer } from 'react'
import UIContext from './UIContext'
import { Themes } from '@/core/types/Themes.type'
import { uiReducer } from './uiReducer'

interface Props {
    children: ReactNode
}

export interface UIState {
   theme: Themes
}

const UI_INITIAL_STATE: UIState = {
    theme:Themes.light
}
const UIProvider:FC<Props> = ( { children } ) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const setTheme = (theme:Themes) => {
        dispatch({ type: 'UI - Set Theme', payload:theme})
    }

    return (
      <UIContext.Provider value={{
         ...state,
         //Methods
         setTheme,
      }}>
         { children }
      </UIContext.Provider>
   )
}

export default UIProvider