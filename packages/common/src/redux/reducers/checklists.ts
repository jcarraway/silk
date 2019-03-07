import { Reducer } from "redux";

export interface State {}

const initialState: State = {}

export const checklistsReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}
