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
            this.points = [];
            this.setSelectedItems();
        }
    }
    onMouseUpBitmap (event) {
        if (event.event.button > 0) return;
        if (!this.selectionPath || this.points.length < 3) {
            if (this.selectionPath) this.selectionPath.remove();
            return;
        }

        const bounds = getHitBounds(getRaster(), this.selectionPath.bounds);
        const firstPoint = this.points.shift();
        
        const canvas = document.createElement('canvas');
        canvas.width = bounds.width;
        canvas.height = bounds.height;
        var ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;

        ctx.beginPath();
        ctx.moveTo(firstPoint.x - bounds.x, firstPoint.y - bounds.y);
        this.points.forEach(p => ctx.lineTo(p.x - bounds.x, p.y - bounds.y));
        ctx.clip();

        var subraster = getRaster().getSubRaster(bounds);
        subraster.remove();
        ctx.drawImage(subraster.canvas, 0, 0);
        const raster = new paper.Raster(canvas);
        raster.position = bounds.center;
        raster.parent = paper.project.activeLayer;
        raster.selected = true;

        // cut it out of original raster!!
        var ctx = getRaster().canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        
        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        this.points.forEach(p => ctx.lineTo(p.x, p.y));
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        this.selectionPath.remove();
        this.selectionPath = null;
        this.paths = [];
        this.setSelectedItems();
    }
}

export default SelectionLassoTool;
