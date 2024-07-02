import { Themes } from "@/core/types/Themes.type"
import { UIState } from "./UIProvider"

type UIActionTipe =
   | { type: 'UI - Set Theme', payload:Themes }

export const uiReducer = (state: UIState, action: UIActionTipe): UIState => {

    switch (action.type) {
        case 'UI - Set Theme':
            return {
                ...state,
                theme: action.payload
            }

      default:
         return state
   }

}