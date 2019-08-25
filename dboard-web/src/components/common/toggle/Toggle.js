import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';
/**
 * Toggle
 * Customizable toggle switch component
 **/
const Toggle = ({shape, defState, isOn, handleToggle}) => {
    const roundClass = shape ? 'slider' : 'slider round'
    return(
        <div>
            <label className="switch">
                <input type="checkbox" defaultChecked={defState} checked={isOn} onChange={handleToggle}/>
                <span className={roundClass}/>
            </label>
        </div>
    );
}

Toggle.propTypes = {
    shape: PropTypes.bool,
    defState: PropTypes.bool,
    isOn: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Toggle;