
export const START = 'START';
export const PAUSE = 'PAUSE';
export const RESET = 'RESET';

export const startTimer = () => ({
    type: START,
});

export const pauseTimer = () => ({
    type: PAUSE,
});

export const resetTimer = () => ({
    type: RESET,
});

const initialState = {
    running: false,
    time: 0,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START:
            return {
                ...state,
                running: true,
            };
        case PAUSE:
            return {
                ...state,
                running: false,
            };
        case RESET:
            return {
                ...state,
                running: false,
                time: 0,
            };
        default:
            return state;
    }
};

export default timerReducer;