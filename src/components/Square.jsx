import React from 'react';

const Square = (props) => {
    return (
        <div 
            onClick={props.onClick} // Correctly using the onClick prop
            style={{
                border: "1px solid",
                height: "100px",
                width: "100%", // Width here is based on your requirement
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            className='square-container'
        >
            <h5>{props.value}</h5> 
        </div>
    );
};

export default Square;
