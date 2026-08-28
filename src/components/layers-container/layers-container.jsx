import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';
import paper from '@turbowarp/paper';
import {setSelectedItems} from '../../reducers/selected-items';
import {getSelectedLeafItems, setItemSelection} from '../../helper/selection';

import styles from './layers-container.css';
import placeholderImage from '../rect-mode/rectangle.svg';

class LayersContainer extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'isSelected',
            'renderLayer',
            'selectLayer',
            'topLevelLayers'
        ]);
    }

    isSelected (layer) {
        if (this.props.selectedItems.includes(layer)) return true;
        const children = layer.getChildren();
        if (!children) return false;
        return children.every(this.isSelected);
    }

    renderLayer (layer) {
        return (<div className={classNames(styles.layer, {[styles.active]: this.isSelected(layer)})}>
            <div className={styles.info} onClick={() => this.selectLayer(layer)}>
                <img alt="" src={placeholderImage} />
                <span>{layer.name ?? <i>{layer.className}</i>}</span>
            </div>
            {(layer.getChildren() || []).map(this.renderLayer)}
        </div>);
    }

    selectLayer (layer) {
        paper.project.deselectAll();
        setItemSelection(layer, true);
        this.props.setSelectedItems();
    }

    topLevelLayers () {
        let layers = paper.project.getActiveLayer().getChildren();
        layers = layers.filter(v => !v.guide);
        return layers;
    }

    render () {
        return (
            <div className={styles.layersContainer}>
                {paper.project && this.topLevelLayers().map(this.renderLayer)}
                {/*<div className={styles.layer}>
                    <div className={styles.info}>
                        <img alt="" src={placeholderImage} />
                        <span>Layer</span>
                    </div>
                </div>
                <div className={classNames(styles.layer, styles.active)}>
                    <div className={styles.info}>
                        <img alt="" src={placeholderImage} />
                        <span>Layer</span>
                    </div>
                </div>
                <div className={styles.layer}>
                    <div className={styles.info}>
                        <img alt="" src={placeholderImage} />
                        <span>Group</span>
                    </div>
                    <div className={styles.layer}>
                        <div className={styles.info}>
                            <img alt="" src={placeholderImage} />
                            <span>Layer</span>
                        </div>
                    </div>
                    <div className={styles.layer}>
                        <div className={styles.info}>
                            <img alt="" src={placeholderImage} />
                            <span>Layer</span>
                        </div>
                    </div>
                </div>*/}
            </div>
        );
    }
}

LayersContainer.propTypes = {
    selectedItems: PropTypes.arrayOf(PropTypes.instanceOf(paper.Item)),
    setSelectedItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    selectedItems: state.scratchPaint.selectedItems,
});
const mapDispatchToProps = dispatch => ({
    setSelectedItems: () => {
        dispatch(setSelectedItems(getSelectedLeafItems(), false));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(LayersContainer);
