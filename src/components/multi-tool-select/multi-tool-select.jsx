import classNames from 'classnames';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import styles from './multi-tool-select.css';

const MultiToolSelectComponent = props => (
    <div className={styles.multiTool} style={{"--index": Math.max(0, props.modes.indexOf(props.mode))}}>
        <div className={styles.tools}>
            {props.tools.map((tool, index) => {
                return (<div className={styles.tool}>
                    {tool}
                </div>);
            })}
        </div>
    </div>
);

MultiToolSelectComponent.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.element).isRequired,
    modes: PropTypes.arrayOf(PropTypes.string).isRequired,
    mode: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    mode: state.scratchPaint.mode
});

export default connect(
    mapStateToProps,
    _ => {}
)(MultiToolSelectComponent);