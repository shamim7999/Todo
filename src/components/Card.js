import React from 'react';

const Card = (props) => {
    const {titleText, descText} = props;
    return (
        <div className='card'>
            <div className="card-title">
                {titleText} 
            </div>
            <div className="card-desc">
                { descText}
            </div>
        </div>
    );
};

export default Card;    