import React from 'react';
import './Checkbox.scss';

const Checkbox = () => {
    return(
        <div>
            <input className="Checkbox-switch"
                id={`switch-new`}
                type="checkbox"
            />
            <label className="Checkbox-switch-label"
                htmlFor={`Checkbox-switch`}
            >
                <span className={`Checkbox-switch-button`} />
            </label>
        </div>
    );
}

export default Checkbox;