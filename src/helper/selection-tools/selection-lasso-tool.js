import paper from '@turbowarp/paper';
import {lassoSelect} from '../guides';
import {clearSelection, processLassoSelection} from '../selection';
import {getRaster} from '../layer';
import {ART_BOARD_WIDTH, ART_BOARD_HEIGHT} from '../view';
import {getHitBounds} from '../bitmap';

/** Tool to handle drag selection. A dotted line box appears and everything enclosed is selected. */
class SelectionLassoTool {
    /**
     * @param {!Modes} mode Current paint editor mode
     * @param {function} setSelectedItems Callback to set the set of selected items in the Redux state
     * @param {function} clearSelectedItems Callback to clear the set of selected items in the Redux state
     */
    constructor (mode, setSelectedItems, clearSelectedItems, minDistance) {
        this.selectionPath = null;
        this.mode = mode;
        this.setSelectedItems = setSelectedItems;
        this.clearSelectedItems = clearSelectedItems;
        this.points = [];
        this.minDistance = minDistance;
    }
    /**
     * @param {boolean} multiselect Whether to multiselect on mouse down (e.g. shift key held)
     */
    onMouseDown (event, multiselect) {
        if (!multiselect) {
            clearSelection(this.clearSelectedItems);
            this.clearSelectedItems();
        }
        this.points = [event.point];
    }
    onMouseDrag (event) {
        if (event.event.button > 0) return; // only first mouse button
        if (this.selectionPath) {
            this.selectionPath.remove();
        }
        this.selectionPath = lassoSelect([...this.points, event.point]);
        if (this.points[this.points.length - 1].getDistance(event.point) >= this.minDistance) {
            this.points.push(event.point);
        }

    }
    onMouseUpVector (event) {
        if (event.event.button > 0) return; // only first mouse button
        if (this.selectionPath) {
            processLassoSelection(event, this.selectionPath);
            this.selectionPath.remove();
            this.selectionPath = null;
            this.setSelectedItems();
        }
    }
    onMouseUpBitmap (event) {
        console.warn("todo");
    }
}

export default SelectionLassoTool;
