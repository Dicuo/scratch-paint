import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';
import paper from '@turbowarp/paper';
import {setSelectedItems} from '../../reducers/selected-items';

import styles from './layers-container.css';
import placeholderImage from '../rect-mode/rectangle.svg';

class LayersContainer extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'selectLayer',
            'renderLayer'
        ]);
    }

    selectLayer (layer) {
        this.props.setSelectedItems([layer]);
    }

    renderLayer (layer) {
        return (<div className={classNames(styles.layer, {[styles.active]: this.props.selectedItems.includes(layer)})}>
            <div className={styles.info} onClick={() => this.selectLayer(layer)}>
                <img alt="" src={placeholderImage} />
                <span>{layer.name ?? <i>{layer.className}</i>}</span>
            </div>
            {(layer.getChildren() || []).map(this.renderLayer)}
        </div>);
    }

    render () {
        return (
            <div className={styles.layersContainer}>
                {paper.project && paper.project.getActiveLayer().getChildren().map(this.renderLayer)}
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
    setSelectedItems: (items) => {
        dispatch(setSelectedItems(items));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(LayersContainer);
