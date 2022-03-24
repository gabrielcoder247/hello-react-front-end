const initState = {
    message: '',
};

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCHING_MESSAGE':
            return {
                ...state,
                loaded: true,
            };
        case 'COMPLETE_MESSAGE':
            return {
                ...state,
                loaded: false,
                message: action.payload.message,
            };
        default:
            return state;
    }
};


export const fetchmessage = () => async(dispatch) => {
    dispatch({ type: 'FETCHING_MESSAGE' });
    await fetch('https://hello-rails-back-end-247.herokuapp.com/api/messages', {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
        })
        .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
};

export default messageReducer;