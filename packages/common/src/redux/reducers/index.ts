import _ from 'lodash';
import { combineReducers } from 'redux';
import { checklistsReducer } from './checklists';

const _rootReducer = combineReducers({
  checklists: checklistsReducer,
})

export const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGOUT':
      return _rootReducer(_.pick(state, 'config') as any, action)

    default:
      return _rootReducer(state, action)
  }
}