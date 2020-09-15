import React from 'react'

const Box = (props) => {
    const { color } = props;
    const divStyle = {
        backgroundColor: color,
    };
    return (
        <div style={divStyle} className="box"></div>
    )
}

export default Box;