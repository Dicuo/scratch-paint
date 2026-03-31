import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import classNames from 'classnames';

import styles from './layers-container.css';
import placeholderImage from '../rect-mode/rectangle.svg';

class LayersContainer extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            
        ]);
    }
    render () {
        return (
            <div className={styles.layersContainer}>
                <div className={styles.layer}>
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
                </div>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayersContainer);
