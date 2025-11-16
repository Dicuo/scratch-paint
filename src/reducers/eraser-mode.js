import log from '../log/log';

const CHANGE_ERASER_SIZE = 'scratch-paint/eraser-mode/CHANGE_ERASER_SIZE';
const CHANGE_ERASER_SMOOTHING_SIZE = 'scratch-paint/eraser-mode/CHANGE_ERASER_SMOOTHING_SIZE';
const initialState = { brushSize: 40, smoothingSize: 10 };

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    let {brushSize, smoothingSize} = state;
    switch (action.type) {
        case CHANGE_ERASER_SIZE:
            if (isNaN(action.brushSize)) {
                log.warn(`Invalid brush size: ${action.brushSize}`);
                return state;
            }
            return { brushSize: Math.max(1, action.brushSize), smoothingSize };
        case CHANGE_ERASER_SMOOTHING_SIZE:
            if (isNaN(action.smoothingSize)) {
                log.warn(`Invalid smoothing setting: ${action.smoothingSize}`);
                return state;
            }
            return { brushSize, smoothingSize: Math.max(0, action.smoothingSize) };
    default:
        return state;
    }
};

// Action creators ==================================
const changeBrushSize = function (brushSize) {
    return {
        type: CHANGE_ERASER_SIZE,
        brushSize: brushSize
    };
};

const changeSmoothingSize = function (smoothingSize) {
    return {
        type: CHANGE_ERASER_SMOOTHING_SIZE,
        smoothingSize: smoothingSize
    };
};

export {
    reducer as default,
    changeBrushSize,
    changeSmoothingSize
};
