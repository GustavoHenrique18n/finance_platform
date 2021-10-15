import { createReducer, on } from "@ngrx/store"
import { isAuthenticated } from "../actions/isAuthenticated"

export const hasAuthenticated = true

const _authUser = createReducer(
  hasAuthenticated,
  on(isAuthenticated, () => true),
)

export const isLoggedUser = (state:any , action:any) => {
  return  _authUser(state , action)
}
