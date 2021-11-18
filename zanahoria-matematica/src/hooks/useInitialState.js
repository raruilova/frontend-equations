import {useState} from 'react';

const initialState = {
    equation: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToEq = (payload) => {
        setState({
            ...state,
            equation: [...state.equation, payload],
        });
    }

    return {
        state,
        addToEq
    }
}

export default useInitialState;