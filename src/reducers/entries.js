const initialState = [
    {
        id: 1,
        entry: {
            key: 'key',
            value: 'value'
        }
    },
    {
        id: 12,
        entry: {
            key: 'key2',
            value: 'value2'
        }
    }
];

export default function entries(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ENTRY':
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    entry: action.entry
                }
            ];

        case 'EDIT_ENTRY':
            return state.map(elem => elem.id === action.id ? {...elem, entry: action.entry} : elem);

        case 'DELETE_ENTRY':
            return state.filter(elem => elem.id !== action.id);

        case 'SHOW_ALL':
            return action.entries;

        case 'DELETE_ALL_ENTRY':
            return state = {};


        default:
            return state;
    }
};
