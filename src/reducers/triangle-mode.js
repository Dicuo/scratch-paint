import log from '../log/log';

const CHANGE_TRIANGLE_SIDE_COUNT = 'scratch-paint/triangle-mode/CHANGE_TRIANGLE_SIDE_COUNT';
const CHANGE_TRIANGLE_SPOKE_RATIO = 'scratch-paint/triangle-mode/CHANGE_TRIANGLE_SPOKE_RATIO';
const initialState = { sideCount: 3, spokeRatio: 1 };

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    let { sideCount, spokeRatio } = state;
    switch (action.type) {
        case CHANGE_TRIANGLE_SIDE_COUNT:
            if (isNaN(action.sideCount)) {
                log.warn(`Invalid side count: ${action.sideCount}`);
                return state;
            }
            return { sideCount: Math.floor(Math.max(3, action.trianglePolyCount)), spokeRatio };
        case CHANGE_TRIANGLE_SPOKE_RATIO:
            if (isNaN(action.spokeRatio)) {
                log.warn(`Invalid spoke ratio: ${action.spokeRatio}`);
                return state;
            }
            return { sideCount, spokeRatio: Math.max(0.01, action.spokeRatio) };
        default:
            return state;
    }
};

// Action creators ===================================
const changeSideCount = function (sideCount) {
    return {
        type: CHANGE_TRIANGLE_SIDE_COUNT,
        sideCount: sideCount
    };
};

const changeSpokeRatio = function (spokeRatio) {
    return {
        type: CHANGE_TRIANGLE_SPOKE_RATIO,
        spokeRatio: spokeRatio
    };
};

export {
    reducer as default,
    changeSideCount,
    changeSpokeRatio
};
