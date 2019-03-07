import { createAction } from '../helpers';

export const addChecklist = (payload: { name: string }) => {
  return createAction('ADD_CHECKLIST', payload);
};

export const addChecklistItem = (payload: { title: string }) => {
  return createAction('ADD_CHECKLIST_ITEM', payload);
};
