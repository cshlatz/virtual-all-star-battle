import React from 'react';

const CircleIcon = (props) => {
    const circleStyle = {
        borderRadius: "50%",
        backgroundColor: "#9494d5",
        minWidth: '50px',
        minHeight: '50px'
    }

    return (
        <div style={circleStyle} />
    );
}

export default CircleIcon;
