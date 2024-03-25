import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CardWithPlus = ({onClick}) => {
  return (
    <div style={cardStyle} onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} style={plusStyle} />
    </div>
  );
};

const cardStyle = {
  width: '303px',
  height: '291px',
  backgroundColor: '#CCCCCC', // Grey color
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
};

const plusStyle = {
  fontSize: '48px',
  color: '#555', // Dark grey color
};

export default CardWithPlus;
