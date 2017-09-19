
export const addEntry = entry => ({type: 'ADD_ENTRY', entry});
export const editEntry = (id, entry) => ({type: 'EDIT_ENTRY', id, entry});
export const deleteEntry = id => ({type: 'DELETE_ENTRY', id});
export const showAll = entries =>({type: 'SHOW_ALL', entries});