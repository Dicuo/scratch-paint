import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './multi-tool-select.css';
import arrow from './arrow.svg';

const MultiToolSelectComponent = props => {
    if (props.settingsStore && props.settingsStore.store.paintMultiTool === false) return (<React.Fragment>{props.tools}</React.Fragment>);
    return (<div className={styles.multiTool} style={{"--index": Math.max(0, props.modes.indexOf(props.mode))}}>
        <img alt="" className={classNames(styles.arrow, {[styles.selected]: props.modes.indexOf(props.mode) !== -1})} src={arrow} />
        <div className={styles.tools}>
            {props.tools.map(tool => <div className={styles.tool}>
                {tool}
            </div>)}
        </div>
    </div>);
};

MultiToolSelectComponent.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.element).isRequired,
    modes: PropTypes.arrayOf(PropTypes.string).isRequired,
    mode: PropTypes.string.isRequired,
    settingsStore: PropTypes.object
};

const mapStateToProps = state => ({
    mode: state.scratchPaint.mode,
    settingsStore: state.scratchPaint.settingsStore
});

export default connect(
    mapStateToProps,
    _ => {}
)(MultiToolSelectComponent);