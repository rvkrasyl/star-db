import React from "react";
import PropTypes from "prop-types";

import './BodyRow.css'

const BodyRow = ({ leftElement, rightElement }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                {leftElement}
            </div>
            <div className="col-md-6">
                {rightElement}
            </div>
        </div>
    );
}

BodyRow.propTypes = {
    leftElement: PropTypes.node.isRequired,
    rightElement: PropTypes.node
}

export default BodyRow;