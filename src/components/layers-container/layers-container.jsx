import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';
import paper from '@turbowarp/paper';

import styles from './layers-container.css';
import placeholderImage from '../rect-mode/rectangle.svg';

class LayersContainer extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            
        ]);
    }
    render () {
        const renderLayer = layer => (<div className={classNames(styles.layer, {[styles.active]: false})}>
            <div className={styles.info}>
                <img alt="" src={placeholderImage} />
                <span>{layer.name ?? <i>{layer.className}</i>}</span>
            </div>
            {(layer.getChildren() || []).map(renderLayer)}
        </div>);

        return (
            <div className={styles.layersContainer}>
                {paper.project && paper.project.getActiveLayer().getChildren().map(renderLayer)}
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

};

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

export default LayersContainer;
