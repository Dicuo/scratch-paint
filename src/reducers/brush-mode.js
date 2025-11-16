import log from '../log/log';

const CHANGE_BRUSH_SIZE = 'scratch-paint/brush-mode/CHANGE_BRUSH_SIZE';
const CHANGE_SMOOTHING_SIZE = 'scratch-paint/brush-mode/CHANGE_SMOOTHING_SIZE';
const CHANGE_BRUSH_TYPE = 'scratch-paint/brush-mode/CHANGE_BRUSH_TYPE';
const initialState = { brushSize: 10, smoothingSize: 10, brushType: "CIRCLE" };

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    let {brushSize, smoothingSize, brushType} = state;
    switch (action.type) {
        case CHANGE_BRUSH_SIZE:
            if (isNaN(action.brushSize)) {
                log.warn(`Invalid brush size: ${action.brushSize}`);
                return state;
            }
            return { brushSize: Math.max(1, action.brushSize), smoothingSize, brushType };
        case CHANGE_SMOOTHING_SIZE:
            if (isNaN(action.smoothingSize)) {
                log.warn(`Invalid smoothing setting: ${action.smoothingSize}`);
                return state;
            }
            return { brushSize, smoothingSize: Math.max(0, action.smoothingSize), brushType };
        case CHANGE_BRUSH_TYPE:
            return { brushSize, smoothingSize, brushType: String(action.brush) };
        default:
            return state;
    }
};

// Action creators ==================================
const changeBrushSize = function (brushSize) {
    return {
        type: CHANGE_BRUSH_SIZE,
        brushSize: brushSize
    };
};

const changeSmoothingSize = function (smoothingSize) {
    return {
        type: CHANGE_SMOOTHING_SIZE,
        smoothingSize: smoothingSize
    };
};

const changeBrushType = function (type) {
    return {
        type: CHANGE_BRUSH_TYPE,
        brush: type
    };
};

export {
    reducer as default,
    changeBrushSize,
    changeSmoothingSize,
    changeBrushType,
};
