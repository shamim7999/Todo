import React from 'react';

const Child = (props) => {
    
    const data = "I am from child brother";
    props.onChildData(data);

    return (
        <div>
            <p>I am from Child Component</p>
            <p>{props.data}</p>
        </div>
    );
};

export default Child; 